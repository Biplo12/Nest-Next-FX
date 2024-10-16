import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { PrismaModule } from 'nestjs-prisma';

const CACHE_TTL = 60; // 1 minute in seconds (cache-manager default in v4 - seconds. v5 - milliseconds)

@Module({
  imports: [
    HttpModule,
    PrismaModule,
    CacheModule.register({
      ttl: CACHE_TTL,
    }),
  ],
  controllers: [CurrencyController],
  providers: [CurrencyService],
  exports: [CurrencyService],
})
export class CurrencyModule {}
