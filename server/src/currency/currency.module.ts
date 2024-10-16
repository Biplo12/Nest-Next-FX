import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    HttpModule,

    CacheModule.register({
      ttl: 60000, // 1 minute cache
    }),
  ],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
