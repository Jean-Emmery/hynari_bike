import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { IBike } from '@hynari_bike/bike';

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

  @Post('new')
  addPet(@Body() bike) {
    return this.bikesService.addBike(bike);
  }

  @Post('editBike')
  editBike(@Body() bike: IBike) {
    return this.bikesService.editBike(bike);
  }

  @Get('show/:id')
  getBikeById(@Param() data) {
    return this.bikesService.getBikeById(data.id);
  }
}
