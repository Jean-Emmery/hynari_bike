import { IGarage } from '@hynari_bike/garage';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GarageService } from './garage.service';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  getAllGarage() {
    return this.garageService.getAllGarage();
  }

  @Get('bikes')
  getAllBikes() {
    return this.garageService.getAllBikes();
  }

  @Get('getId/:name')
  getGarageIdByName(@Param() data) {
    return this.garageService.getGarageIdByName(data.name)
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
  @Post('editGarage')
  editGarage(@Body() garage: IGarage) {
    return this.garageService.editGarage(garage);
  }
  @Get('show/:id')
  getGarageById(@Param() data) {
    return this.garageService.getGarageById(data.id);
  }
}
