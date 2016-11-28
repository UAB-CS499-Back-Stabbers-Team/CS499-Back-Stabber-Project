import { Injectable } from '@angular/core';
import {DbService} from "../services/db.service";

@Injectable()
export class WorldService {

  constructor(db: DbService) { }

}
