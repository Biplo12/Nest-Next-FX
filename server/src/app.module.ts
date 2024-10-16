import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyModule } from './currency/currency.module';
import { CacheModule } from '@nestjs/cache-manager';
import { PrismaModule } from 'nestjs-prisma';
@Module({
  imports: [
    PrismaModule,

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    CacheModule.register(),

    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
