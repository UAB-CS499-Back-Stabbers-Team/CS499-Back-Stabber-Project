import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Role } from "./role";
declare var firebase: any;

@Injectable()
export class RolesService implements OnDestroy {
  public db = firebase.database();
  public dbpath = 'roles';
  public ref = this.db.ref();
  public cr = this.ref.child(this.dbpath);
  public keys = [];
  public items = {};

  constructor() {
    this.cr.on('value', snapShot => this.process(snapShot));
  }

  ngOnDestroy() {
    this.ref.off();
  }

  public getItemByIndex(i: number) {
    return this.items[this.keys[i]];
  }

  public keyExists(key: string) {
    return this.cr.once('value').exists(key);
  }

  public getChildRef(path: any) {
    return this.ref.child(path);
  }

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
          this.items[s.key] = new Role(s.val().name, s.key);
        }
      );
    }
  }
}
