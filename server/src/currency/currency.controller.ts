import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('currency')
@UseInterceptors(CacheInterceptor)
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Get('rate')
  async getExchangeRate() {
    const rate = await this.currencyService.getExchangeRate();
    return { rate };
  }

  @Post('exchange')
  async simulateTransaction(@Body('amount') amount: number) {
    return this.currencyService.simulateTransaction(amount);
  }
}
