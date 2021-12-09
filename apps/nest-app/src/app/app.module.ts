import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

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
