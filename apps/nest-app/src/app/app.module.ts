import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GarageModule } from '../garage/garage.module';
import { BikesModule } from '../bikes/bikes.module';
import { StationModule } from '../station/station.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GarageModule,
    BikesModule,
    StationModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    AppGateway
  ],
})
export class AppModule {}
