import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GarageModule } from '../garage/garage.module';
import { BikesModule } from '../bikes/bikes.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GarageModule,
    BikesModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
