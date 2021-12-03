import { Body, Controller, Get, Post } from '@nestjs/common';
import { GarageService } from './garage.service';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  getAllGarage() {
    return this.garageService.getAllGarage();
  }

  @Get('/garageList')
  getGarage() {
    return this.garageService.getGarage();
  }

  @Post('new')
  addGarage(@Body() garage) {
    return this.garageService.addGarage(garage);
  }
}
