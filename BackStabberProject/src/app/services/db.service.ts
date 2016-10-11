import { Injectable } from '@angular/core';
import { FirebaseService } from "../services/firebase/firebase.service";
import {MessageService} from "../message/message.service";
import {User} from "../user/user";

@Injectable()
export class DbService {
  constructor(private firebaseService: FirebaseService, private messageService: MessageService){}

  signinUser(email, pass) {
    console.log(email, pass);
    return this.firebaseService.signinUser(email, pass);
  }

  createUser(email, pass) {
    console.log(email, pass);
    return this.firebaseService.createUser(email, pass);
  }

  onAuthStateChanged(callback): User {
    return this.firebaseService.onAuthStateChanged(callback);
  }

  getCurrentUser() {
    this.firebaseService.getCurrentUser();
  }

  signOut() {
    return this.firebaseService.signOut();
  }
}
