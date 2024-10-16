import { Controller, Get, Post, Body } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Get('exchange-rate') // GET /currency/exchange-rate
  async getExchangeRate() {
    const rate = await this.currencyService.getExchangeRate();

    return { rate };
  }

  @Post('simulate-transaction') // POST /currency/simulate-transaction
  async simulateTransaction(@Body('amountEUR') amountEUR: number) {
    return this.currencyService.simulateTransaction(amountEUR);
  }
}
