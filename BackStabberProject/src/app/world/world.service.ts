import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { DbService } from "../services/db.service";
import {World} from "./World";

@Injectable()
export class WorldService implements OnDestroy {
  private cr: any;
  public dbPath = 'world';
  public keys = [];
  public items = {};

  constructor(private db: DbService) {
    this.cr = this.db.getChildRef(this.dbPath);
    this.getAll(snapShot => this.process(snapShot));
  }

  ngOnDestroy() {
    this.cr.off();
  }

  public getItemByIndex(i: number) {
    return this.items[this.keys[i]];
  }

  public keyExists(key: string) {
    return this.cr.once('value').exists(key);
  }

  // public getChildRef(path: any) {
  //   return this.db.getChildRef(path);
  // }

  public getAll(func: any) {
    return this.cr.on('value', func);
  }

  public remove(i: number) {
    this.cr.child(this.keys[i]).remove();
  }

  public set(item: any) {
    if(item.id == '')
      item.id = this.cr.push().key;
    this.cr.child(item.id).set(item);
  }

  private process(snap: any) {
    this.items = {};
    this.keys = [];

    if(snap.val() != null) {
      snap.forEach(
        s => {
          this.keys.push(s.key);
          let v = s.val();
          this.items[s.key] = new World(s.key, v.name, v.prologue, v.image, v.stories);
        }
      );
    }
  }
}
