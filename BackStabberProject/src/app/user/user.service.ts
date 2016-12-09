import { Injectable, OnInit } from '@angular/core';
import { DbService } from "../services/db.service";
import { User } from "./user";
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";

declare var firebase: any;

@Injectable()
export class UserService implements OnInit {
  private fb: any = firebase.database();
  private cr: any;
  public currentUser: User;
  public dbPath = 'user';
  public keys = [];
  public items = {};
  public email: string;



  constructor(private dbService: DbService, private ss: StorageService, private auth: AuthService) {
    this.cr = dbService.getChildRef(this.dbPath);
    this.email = this.auth.getCurrentUserEmail();

  }

  ngOnInit() {
    // this.currentUser = this.fb.database().ref(‘user/‘+ this.email);
    console.log(this.currentUser);
  }

  getUser() {
    return this.currentUser;
  }

  ngOnDestroy() {
    this.cr.off();
  }

  getEmail( user: User ) {
    return user.emails;
  }

  onSubmit( firstName: string,
             LastName: string,
             emails: string,
             gender: string,
             age: number,
             country: string,
             race_: string,
             ethnicity: string,) {

    this.currentUser.firstName = firstName;
    this.currentUser.LastName = LastName;
    this.currentUser.emails = emails;
    this.currentUser.gender = gender;
    this.currentUser.age = age;
    this.currentUser.country = country;
    this.currentUser.race_ = race_;
    this.currentUser.ethnicity = ethnicity;
  }

  getFirstName() { return this.currentUser.firstName; }
  getLastName() { return this.currentUser.LastName; }
  getGender() { return this.currentUser.emails; }
  getAge() { return this.currentUser.age; }
  getCountry() { return this.currentUser.country; }
  getRace() { return this.currentUser.race_; }
  getEthnicity() { return this.currentUser.ethnicity; }



  // isUserSignedin() {
  //   return authService.isUserSignedin();
  // }


}
