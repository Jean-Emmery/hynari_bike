import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { k } from '@hynari_bike/knex-lib';
import { IStation } from '@hynari_bike/station';

@Injectable()
export class StationService {
  async getStationByGarageId(id) {
    return k.getStationByGarageIdDb(id);
  }
  getAllStation(): any {
    return k.getAllStationDb();
  }
  editStation(station: IStation) {
    return k.editStationDb(station);
  }
  async deleteStation(id) {
    return k.deleteStationDb(id);
  }
  addStation(station) {
    return k.addStationDb(station);
  }
  getStation(): Promise<Array<string>> {
    return k.getStationDb();
  }
  getStationById(id: string) {
    return k.getStationByIdDb(id);
  }

  getStationIdByName(name: string) {
    return k.getStationIdByNameDb(name);
  }
}
