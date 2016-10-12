import { Injectable } from '@angular/core';
import { FirebaseService } from "../services/firebase/firebase.service";
import {MessageService} from "../message/message.service";
import {User} from "../user/user";

@Injectable()
export class DbService {
  constructor(private db: FirebaseService, private messageService: MessageService){}

  signinUser(email, pass) {
    console.log(email, pass);
    return this.db.signinUser(email, pass);
  }

  createUser(email, pass) {
    console.log(email, pass);
    return this.db.createUser(email, pass);
  }

  onAuthStateChanged(callback) : any {
    return this.db.onAuthStateChanged(callback);
  }

  getCurrentUser() {
    this.db.getCurrentUser();
  }

  signOut() {
    return this.db.signOut();
  }
}
