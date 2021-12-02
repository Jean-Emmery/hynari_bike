import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    //MongooseModule.forRoot('mongodb://localhost/nest-app', { useNewUrlParser: true }),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
