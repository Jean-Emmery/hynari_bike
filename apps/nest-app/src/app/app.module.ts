import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GarageModule } from '../garage/garage.module';
import { BikesModule } from '../bikes/bikes.module';

@Module({
  imports: [GarageModule, BikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
