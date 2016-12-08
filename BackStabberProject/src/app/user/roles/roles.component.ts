import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { RolesService } from "./roles.service";
import { Role } from "./Role.ts"

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RolesService]
})
export class RolesComponent implements OnInit {
  mainForm: FormGroup;
  newItem: Role;
  oldItem: Role;
  isNew: boolean;
  editing = 'New Role';

  constructor(private db: RolesService) {
    this.oldItem = new Role('', '');
    this.newItem = new Role('', '');
  }

  ngOnInit() {
    this.mainForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)])
    });
  }

  remove(i: number) {
    if(confirm('Are you sure you want to remove ' + this.db.items[this.db.keys[i]].name + ' from the database?')) {
      this.db.remove(i);
      this.clear();
    };
  }

  edit(i: number) {
    this.isNew = false;
    this.oldItem = this.db.getItemByIndex(i);
    this.editing = this.oldItem.name;
  }

  onSubmit() {
    this.newItem.name = this.mainForm.value.name;
    this.newItem.id = this.oldItem.id;
    this.db.set(this.newItem);
    this.clear();
  }

  onCancel() {
    this.clear();
  }

  clear() {
    this.mainForm.reset();
    this.newItem = new Role('', '');
    this.oldItem = new Role('', '');
    this.isNew = true;
    this.editing = 'New Rule';
  }
}
