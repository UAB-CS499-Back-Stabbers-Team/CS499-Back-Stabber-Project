import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { DbService } from "../services/db.service";
import { World } from "./World";
import {Story} from "./story/Story";
import {Choice} from "./story/choice/Choice";
import {MoralRule} from "../moral-rule/moralRule";

@Injectable()
export class WorldService implements OnDestroy {
  private cr: any;
  public dbPath = 'world';
  public keys = [];
  public items = {};
  public done = false;

  constructor(private db: DbService, private ss: StorageService) {
    this.cr = this.db.getChildRef(this.dbPath);
    this.getAll(snapShot => this.process(snapShot)); console.log(this.items);
  }

  ngOnDestroy() {
    this.cr.off();
  }

  public getItemById(id: string) : World {
    let x = this.items[id];
    if(x) return x;
    else return null;
  }

  public getItemByIndex(i: number) {
    return this.items[this.keys[i]];
  }

  public keyExists(key: string) {
    return this.cr.once('value').exists(key);
  }

  public getChildRef(path: any) {
    return this.db.getChildRef(path);
  }

  public getAll(func: any) {
    return this.cr.on('value', func);
  }

  public remove(i: number) {
    this.cr.child(this.keys[i]).remove();
  }

  public set(item: any) {
    console.log(item);
    if(item.id == null)
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
          this.items[s.key] = new World(v.id, v.name, v.prologue, v.imageURL, this.storyProcess(<Story[]>v.stories));
        }
      );
    }
    this.done = true;
  }

  public storyProcess(stories: Story[]) {
    let ar = [];

    if(stories != null) {
      for(var i = 0; i < stories.length; i++) {
        let x = stories[i];
        ar.push(new Story(x.id, x.worldId, x.title, x.prologue, this.choiceProcess(<Choice[]>x.choices)));
      }
      return ar;
    } else {
      return [];
    }
  }

  public choiceProcess(items: Choice[]) {
    let ar = [];

    if(items != null) {
      for(var i = 0; i < items.length; i++) {
        let x = items[i];
        ar.push(new Choice(x.id, x.text, x.moralRule));
      }
      return ar;
    } else {
      return [];
    }
  }

  public getImageUrl(path: string, success: any, error: any) {
    return this.ss.getFileUrl(path, success, error);
  }
}
