import { Injectable } from '@angular/core';
import { FirebaseService } from "../services/firebase/firebase.service";
import { MessageService } from "../message/message.service";
import {User} from "../user/user";

@Injectable()
export class DbService {

  constructor(private db: FirebaseService, private messageService: MessageService) {  }

  public getRef() {
    return this.db.getRef();
  }

  public getChildRef(child: string) {
    return this.db.getChildRef(child);
  }

  signinUser(email, pass) {
    return this.db.signinUser(email, pass);
  }

  createUser(email, pass) {
    return this.db.createUser(email, pass);
  }

  onAuthStateChanged() : any {
    return this.db.onAuthStateChanged();
  }

  getCurrentUser() {
    this.db.getCurrentUser();
  }

  signOut() {
    return this.db.signOut();
  }
}
