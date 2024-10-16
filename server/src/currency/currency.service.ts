import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheManagerStore } from 'cache-manager';

@Injectable()
export class CurrencyService {
  constructor(
    private httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: CacheManagerStore,
    private configService: ConfigService,
  ) {}

  async getExchangeRate(): Promise<number> {
    const cachedRate = await this.cacheManager.get('EUR_PLN_RATE');

    if (cachedRate !== undefined) {
      return cachedRate;
    }

    const apiUrl = this.configService.get<string>('API_URL');
    const apiKey = this.configService.get<string>('API_KEY');

    const response = await lastValueFrom(
      this.httpService.get(apiUrl, {
        headers: { 'x-api-key': apiKey },
      }),
    );

    const rate = response.data.rate;
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

    // Here you would typically save the transaction to a database
    // For this example, we'll just return the transaction details

    return {
      amountEUR,
      amountPLN,
      rate,
      timestamp,
    };
  }
}
