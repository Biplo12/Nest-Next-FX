import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CacheModule } from '@nestjs/cache-manager';

const CACHE_TTL = 60000; // 1 minute

@Module({
  imports: [
    HttpModule,

    CacheModule.register({
      ttl: CACHE_TTL,
    }),
  ],

  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
