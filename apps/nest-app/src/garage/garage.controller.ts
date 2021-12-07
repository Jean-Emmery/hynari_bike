import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GarageService } from './garage.service';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  getAllGarage() {
    return this.garageService.getAllGarage();
  }

  @Get('getAll')
  getAllBikes() {
    console.log('contro');
    return this.garageService.getAllBikes();
  }

  @Get('/garageList')
  getGarage() {
    return this.garageService.getGarage();
  }

  @Post('new')
  addGarage(@Body() garage) {
    return this.garageService.addGarage(garage);
  }
  @Delete(':id')
  deleteGarage(@Param() data) {
    return this.garageService.deleteGarage(data.id);
  }
}
