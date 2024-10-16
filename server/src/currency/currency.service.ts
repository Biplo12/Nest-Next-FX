import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CurrencyService {
  constructor(
    private httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  async getExchangeRate(): Promise<number> {
    const cachedRate = await this.cacheManager.get('EUR_PLN_RATE');

    if (cachedRate !== undefined) {
      return cachedRate as number;
    }

    const apiUrl = this.configService.get<string>('API_URL');
    const apiKey = this.configService.get<string>('API_KEY');

    const response = await lastValueFrom(
      this.httpService.get(apiUrl, {
        headers: { 'x-api-key': apiKey },
      }),
    );

    const rate = response.data.exchange_rate;
    await this.cacheManager.set('EUR_PLN_RATE', rate, 60000);

    return rate;
  }

  async simulateTransaction(amountEUR: number): Promise<{
    amountEUR: number;
    amountPLN: number;
    rate: number;
    timestamp: Date;
  }> {
    const rate = await this.getExchangeRate();
    const amountPLN = amountEUR * rate;
    const timestamp = new Date();

    await this.prismaService.transaction.create({
      data: {
        amountEUR,
        amountPLN,
        rate,
        timestamp,
      },
    });

    return {
      amountEUR,
      amountPLN,
      rate,
      timestamp,
    };
  }
}
