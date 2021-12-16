import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';
import { IGarage } from '@hynari_bike/garage';

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
    return k.getAllBikesDb();
  }
  async deleteGarage(id) {
    return k.deleteGarageDb(id);
  }
  editGarage(garage: IGarage) {
    return k.editGarageDb(garage);
  }
  getGarageById(id: string) {
    return k.getGarageByIdDb(id);
  }

  getGarageIdByName(name: string) {
    return k.getGarageIdByNameDb(name)
  }
}
