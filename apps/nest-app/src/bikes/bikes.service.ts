import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';
import { IBike } from '@hynari_bike/bike';

@Injectable()
export class BikesService {
  getAllBikes(): any {
    return k.getAllBikesDb();
  }
  async getBikesByGarageId(id) {
    return k.getBikesByGarageIdDb(id);
  }
  addBike(bike) {
    return k.addBikeDb(bike);
  }
  editBike(bike: IBike) {
    console.log('service' + bike);
    return k.editBikeDb(bike);
  }
  getBikeById(id: string) {
    return k.getBikeByIdDb(id);
  }
  async deleteBike(id) {
    return k.deleteBikeDb(id);
  }
}
