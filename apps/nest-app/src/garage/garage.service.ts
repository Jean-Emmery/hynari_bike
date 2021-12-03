import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';

@Injectable()
export class GarageService {
  getAllGarage(): any {
    k.getAllGarageDb().then((garage) => console.log);
  }
}
