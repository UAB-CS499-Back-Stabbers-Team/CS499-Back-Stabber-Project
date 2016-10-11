import { Injectable } from '@angular/core';
import { DbService } from "../services/db.service";
import { MessageService } from "../message/message.service";
import { User } from "../user/user";

@Injectable()
export class AuthService {
  currentUser: User = null;
  email: string;
  password: string;

  constructor(private dbService: DbService, private messageService: MessageService) { }

  signinUser(email, pass) {
    // console.log(pass);
    return this.dbService.signinUser(email, pass);
    // console.log(user.json);
  }

  createUser(email, pass) {
    return this.dbService.createUser(email, pass)
    // console.log(user.json);
  }

  onAuthStateChanged(callback){
    let temp = this.dbService.onAuthStateChanged(callback);
    if(temp) {
      if(temp.uid) this.currentUser.uid = temp.uid;
      if(temp.displayName) this.currentUser.displayName = temp.displayName;
      if(temp.email) this.currentUser.email = temp.email;
      if(temp.photoURL) this.currentUser.photoURL = temp.photoURL;
      if(temp.providerId) this.currentUser.providerId = temp.providerId;
    } else {
      return this.resetCurrentUser();
    }
  }

  getCurrentUser() {
    return this.dbService.getCurrentUser();
  }

  signOut() {
    return this.dbService.signOut();
  }

  private resetCurrentUser() {
    this.currentUser = new User();
  }
}
