import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import {DbService} from "../services/db.service";
import {MoralRule} from "./moralRule";
// import {FirebaseService} from "../services/firebase/firebase.service";
declare var firebase: any;

@Injectable()
export class MoralRuleService implements OnInit, OnDestroy {
  private rules: any;
  private keys: any;
  private dbpath = 'moral-rules';
  private db = firebase.database();
  private ref = this.db.ref();
  private mr = this.ref.child(this.dbpath);

  // constructor(private db: DbService) {}

  ngOnInit() {
    // this.getAll(s => this.process(s));
  }

  ngOnDestroy() {
    this.ref.off();
  }

  public keyExists(key: string) {
    return this.mr.once('value').exists(key.toLowerCase());
  }

  public getChildRef(path: any) {
    return this.ref.child(path);
  }

  public getAll(func: any) {
    return this.mr.on('value', func);
    // return [
    //   new MoralRule('Kantian'),
    //   new MoralRule('Utilitarian')
    // ];
  }

  public remove(path: string) {
    this.ref.child(path).remove();
  }

  public set(path: string, rule: any) {
    this.mr.child(path).set(rule);
  }

  process(snap: any) {
    this.rules = {};
    this.keys = new Array();
    if(snap.val() != null) {
      snap.forEach(
        s => {
          this.rules[s.key] = s.val();
          this.keys.push(s.key);
        }
      );
    }
  }

  public getKeys() {
    return this.keys;
  }

  public getRules() {
     return this.rules;
  }
}
