import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {MoralRule} from "./moralRule";
import {MoralRuleService} from "./moral-rule.service";
import {FirebaseService} from "../services/firebase/firebase.service";
import {MessageService} from "../message/message.service";
// import {firebase} from "../services/firebase/firebase.service";
declare var firebase: any;

@Component({
  selector: 'bsp-moral-rule',
  templateUrl: './moral-rule.component.html',
  styleUrls: ['./moral-rule.component.css'],
  providers: [MoralRuleService]
})
export class MoralRuleComponent implements OnInit, OnDestroy {
  moralRuleForm: FormGroup;
  rules: any;
  keys: any;
  newRule: any;
  oldRule: any;
  selectedKey = null;
  isNew: boolean;
  editing = 'New Rule';
  obj: any;
  path = 'moral-rules';

  constructor(private db: MoralRuleService, private fb: FirebaseService, private messageService: MessageService) { }

  ngOnInit() {
    this.moralRuleForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)])
    });

    this.clear();
    this.obj = this.db.getAll(s => this.process(s));
    // this.obj = this.db.process(s => this.start());
  }

  start() {
    this.keys = this.db.getKeys();
    this.rules = this.db.getRules();
    // console.log(this.keys);
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

  edit(i: number) {
    this.isNew = false;
    this.selectedKey = this.keys[i];
    this.oldRule = this.rules[this.keys[i]];
    this.editing = this.oldRule.name;
  }

  remove(i: number) {
    if(confirm('Are you sure you want to remove ' + this.rules[this.keys[i]].name + ' from the database?')) {
      this.db.remove(this.path + '/' + this.keys[i]);
      this.clear();
    };
  }

  onSubmit() {
    this.newRule = this.moralRuleForm.value;
    var path = this.selectedKey === null ? this.newRule.name.toLowerCase() : this.selectedKey;
    this.db.set(path, this.newRule);
    this.clear();
  }

  onCancel() {
    this.clear();
  }

  clear() {
    this.moralRuleForm.reset();
    this.selectedKey = null;
    this.newRule = '';
    this.oldRule = '';
    this.isNew = true;
    this.editing = 'New Rule';
  }

  ngOnDestroy() {
    // this.obj.off();
  }
}
