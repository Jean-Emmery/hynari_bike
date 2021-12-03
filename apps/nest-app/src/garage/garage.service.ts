import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';

@Injectable()
export class GarageService {
  getAllGarage(): any {
    console.log('garage service');
    return axios
      .get(k.getAllGarageDb())
      .then((garage) => garage.data)
      .catch((error) => console.log('erreur', error));
  }
}
