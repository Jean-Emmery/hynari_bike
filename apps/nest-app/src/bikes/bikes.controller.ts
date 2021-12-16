import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  getBikesUpByStationId(@Param() data) {
    return this.bikesService.getBikesUpByStationId(data.id);
  }

  @Get('my/:id')
  getBikesByUserId(@Param() data) {
    return this.bikesService.getBikesByUserId(data.id);
  }

  @Post('drop/:id')
  dropBike(@Param() data) {
    return this.bikesService.dropBike(data.id)
  }

  // @Get(':id')
  // getBikesByStationId(@Param() data) {
  //   return this.bikesService.getBikesByStationId(data.id);
  // }

  @Post('new')
  addBike(@Body() bike) {
    return this.bikesService.addBike(bike);
  }

  @Post('editBike')
  editBike(@Body() bike: IBike) {
    return this.bikesService.editBike(bike);
  }
  @Post('pickUpBike')
  pickUpBike(@Body() bike: IBike) {
    return this.bikesService.pickUpBike(bike);
  }

  @Get('show/:id')
  getBikeById(@Param() data) {
    return this.bikesService.getBikeById(data.id);
  }
  @Delete(':id')
  deleteBike(@Param() data) {
    return this.bikesService.deleteBike(data.id);
  }
}
