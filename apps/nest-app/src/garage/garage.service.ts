import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';

@Injectable()
export class GarageService {
  getAllGarage(): any {
    return k.getAllGarageDb();
  }
  getGarage(): Promise<Array<string>> {
    return k.getGarageDb();
  }
  addGarage(garage) {
    return k.addGarageDb(garage);
  }
  getAllBikes(): any {
    console.log('service');
    return k.getAllBikesDb();
  }
  async deleteGarage(id) {
    return k.deleteGarageDb(id);
  }
}
