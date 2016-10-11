import { Component } from '@angular/core';
import {FirebaseService} from "./services/firebase/firebase.service";
import {AuthService} from "./services/auth.service";
import {UserService} from "./user/user.service";
import {MessageService} from "./message/message.service";
import {DbService} from "./services/db.service";
// declare var currentUser: any;

@Component({
  selector: 'bsp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, UserService, MessageService, DbService, FirebaseService]
})
export class AppComponent {
  // title = 'app works!';
  // currentUser: any;

  // constructor(private authService: FirebaseService) {}

  // ngOnInit() {
  //   // this.signedinUser = this.authService.signedinUser;
  //   this.currentUser = this.authService.onAuthStateChanged(e => console.log('User in AppComponent: ' + e));
  // }
}
