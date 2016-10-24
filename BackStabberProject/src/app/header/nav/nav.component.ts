import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Subscription } from 'rxjs/Rx';
import {User} from "../../user/user";
import {FirebaseService} from "../../services/firebase/firebase.service";
import {UserAuth} from "../../services/userAuth";

@Component({
  selector: 'bsp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy, OnInit, AfterViewInit {
  private isAuth: boolean;
  private authUser: UserAuth;
  private authSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authUser = new UserAuth();
  }

  ngAfterViewInit() {
      this.authSub = this.authService.onAuthStateChanged().subscribe(x => this.auth(x));
  }

  auth(x) {
    if(x !== null) {
      this.authUser = x;
      if (this.authUser.email)
        this.isAuth = true;
      else
        this.isAuth = false;
    }
    else
      this.authUser = new UserAuth();
  }

  signOut() {
    this.authService.signOut();
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

}
