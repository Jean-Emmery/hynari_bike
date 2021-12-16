import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';
import { IBike } from '@hynari_bike/bike';

@Injectable()
export class BikesService {
  getAllBikes(): any {
    return k.getAllBikesDb();
  }
  // async getBikesByStationId(id) {
  //   return k.getBikesByStationIdDb(id);
  // }
  async getBikesUpByStationId(id) {
    return k.getBikesUpByStationIdDb(id);
  }
  addBike(bike) {
    return k.addBikeDb(bike);
  }
  editBike(bike: IBike) {
    return k.editBikeDb(bike)
  }
  pickUpBike(bike: IBike) {
    return k.pickUpBikeDb(bike);
  }
  getBikeById(id: string) {
    return k.getBikeByIdDb(id);
  }
  getBikesByUserId(id: string) {
    return k.getBikesByUserIdDb(id);
  }
  async dropBike(id: string) {
    return k.dropBikeDb(id);
  }
  async deleteBike(id) {
    return k.deleteBikeDb(id);
  }
}
