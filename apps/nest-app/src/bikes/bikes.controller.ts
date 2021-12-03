import { Controller, Get, Param } from '@nestjs/common';
import { BikesService } from './bikes.service';

@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Get('/')
  getAllBikes() {
    return this.bikesService.getAllBikes();
  }

  @Get(':id')
  getBikesByGarageId(@Param() data) {
    console.log('textdata');
    console.log(data.id);
    return this.bikesService.getBikesByGarageId(data.id);
  }
}
