import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { DbService } from "../services/db.service";
import { Router } from '@angular/router';
import { MessageService } from "../message/message.service";
import { UserService } from "../user/user.service";
import { UserAuth } from "./userAuth";
import { User } from "../user/user";

@Injectable()
export class AuthService {
  authUser: UserAuth;
  authSub: Subscription;

  constructor(private dbService: DbService,
              private messageService: MessageService, private router: Router) {
    this.authUser = new UserAuth();
  }

  signinUser(email, pass) {
    return this.dbService.signinUser(email, pass);
  }

  signOut() {
    let temp = this.dbService.signOut();
    this.router.navigate(['/']);
    return temp;
  }

  createUser(email, pass) {
    return this.dbService.createUser(email, pass)
    // console.log(user.json);
  }

  onAuthStateChanged(): Observable<UserAuth> {
    const subject = new Subject<UserAuth>();
    this.authSub = this.dbService.onAuthStateChanged().subscribe(
      x => {
        this.updateCurrentUser(x);
        subject.next(this.authUser);
      },
      e => {
        this.signOut();
      }
    );
    return subject.asObservable();
  }

  getCurrentUser() : UserAuth {
    return this.authUser;
  }

  getCurrentUserEmail(): string {
    return this.authUser.email;
  }

  private resetCurrentUser() {
    this.authUser = new UserAuth();
  }

  private updateCurrentUser(temp) {
    if (temp) {
      this.authUser.uid = temp.uid;
      this.authUser.displayName = temp.displayName;
      this.authUser.email = temp.email;
      this.authUser.photoURL = temp.photoURL;
      this.authUser.providerId = temp.providerId;
    } else {
      this.resetCurrentUser();
    }
  }

  ngOnDestroy() {
    this.authSub.unsubscribe;
  }
}
