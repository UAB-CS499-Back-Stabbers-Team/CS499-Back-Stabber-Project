import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DbService } from "../services/db.service";
import { MessageService } from "../message/message.service";
import { UserService } from "../user/user.service";
import { UserAuth } from "./userAuth";
import { User } from "../user/user";

@Injectable()
export class AuthService implements OnInit, Observable<UserAuth> {
  currentUser: UserAuth;

  constructor(private dbService: DbService, private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    this.currentUser = new UserAuth();
    this.updateCurrentUser();
  }

  signinUser(email, pass) {
    // console.log(pass);
    return this.dbService.signinUser(email, pass);
    // console.log(user.json);
  }

  createUser(email, pass) {
    return this.dbService.createUser(email, pass)
    // console.log(user.json);
  }

  onAuthStateChanged(callback) : Observable<UserAuth> {
    return
  }

  getCurrentUser() : UserAuth {
    return this.currentUser;
  }

  // getCurrentUserEmail(): currentUser.email {
  //   return this.currentUser.email;
  // }

  signOut() {
    return this.dbService.signOut();
  }

  private resetCurrentUser() {
    this.currentUser = new UserAuth();
  }

  private updateCurrentUser() {
    let temp = this.dbService.onAuthStateChanged(temp => {
        if (temp) {
          if (temp.uid) this.currentUser.uid = temp.uid;
          if (temp.displayName) this.currentUser.displayName = temp.displayName;
          if (temp.email) this.currentUser.email = temp.email;
          if (temp.photoURL) this.currentUser.photoURL = temp.photoURL;
          if (temp.providerId) this.currentUser.providerId = temp.providerId;
        } else {
          this.resetCurrentUser();
        }
      }
    );
  }
}
