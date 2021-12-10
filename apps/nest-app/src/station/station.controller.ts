import { IStation } from '@hynari_bike/station';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StationService } from './station.service';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get('/')
  getAllStation() {
    console.log('station contro');
    return this.stationService.getAllStation();
  }

  @Get(':id')
  getStationByGarageId(@Param() data) {
    return this.stationService.getStationByGarageId(data.id);
  }
  @Post('editBike')
  editBike(@Body() station: IStation) {
    return this.stationService.editStation(station);
  }
  @Delete(':id')
  deleteBike(@Param() data) {
    return this.stationService.deleteStation(data.id);
  }
  @Post('new')
  addStation(@Body() station) {
    return this.stationService.addStation(station);
  }
}
