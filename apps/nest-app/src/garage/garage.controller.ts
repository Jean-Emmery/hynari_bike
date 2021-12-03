import { Controller, Get } from '@nestjs/common';
import { GarageService } from './garage.service';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  getAllGarage() {
    return this.garageService.getAllGarage();
  }
}
