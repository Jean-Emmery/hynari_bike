import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';

@Injectable()
export class BikesService {
  getAllBikes(): any {
    return k.getAllBikesDb();
  }

  async getBikesByGarageId(id) {
    return k.getBikesByGarageIdDb(id);
  }
}
