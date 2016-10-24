import { Injectable, OnInit } from '@angular/core';
import { DbService } from "../services/db.service";
import { User } from "./user";

@Injectable()
export class UserService implements OnInit {
  currentUser: User;

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.currentUser = new User();
    console.log(this.currentUser);
  }

  getUser() {
    return true;
  }

  // isUserSignedin() {
  //   return authService.isUserSignedin();
  // }


}
