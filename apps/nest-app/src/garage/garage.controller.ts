import { Controller, Get } from '@nestjs/common';
import { GarageService } from './garage.service';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  getAllGarage() {
    console.log('garage controller');
    return this.garageService.getAllGarage();
  }
}
