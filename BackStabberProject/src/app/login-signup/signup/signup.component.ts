import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../../user/user.service";
import {AuthService} from "../../services/auth.service";
import {FirebaseService} from "../../services/firebase/firebase.service";
import {MessageService} from "../../message/message.service";
// import {DbService} from "../../services/db.service";

@Component({
  selector: 'bsp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: []
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  em: any;
  pass: any;
  passCon: any;
  passConfirmed: boolean;
  dberror: string = '';

  constructor(private firebaseService: FirebaseService, private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(
          "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        )]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)])
      }
    );
    this.em = this.myForm.controls['email'];
    this.pass = this.myForm.controls['password'];
    this.passCon = this.myForm.controls['passwordConfirm'];
    // this.passConfirmed = this.passwordConfirmValidator();
  }

  confPass() {
    console.log(this.pass);
    console.log(this.passCon);
    console.log(this.passConfirmed);
    this.passConfirmed = this.passCon.value === this.pass.value;
    console.log(this.passConfirmed);
  }

  // passwordConfirmValidator(control: FormControl): {[s: string]: boolean} {
  //   if(this.getPassValue() && (control.value !== this.getPassValue())) {
  //     return {confirmed: true};
  //   }
  //   return null;
  // }

  success() {
    console.log('The user was created.');
    this.router.navigate(['/']);
  }

  onSubmit() {
    var promise = this.firebaseService.createUser(this.em.value, this.pass.value)
      .then(e => this.success())
      .catch(e => {
        console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
        switch(e.code) {
          case 'auth/email-already-in-use':
            console.log('The email address already exists.');
            this.dberror = this.em.value + ' is already registered';
            break;
          case 'auth/invalid-email':
            console.log('The email address is invalid.');
            this.dberror = this.em.value + ' is an invalid email';
            break;
          case 'auth/weak-password':
            console.log('The password is too weak.');
            this.dberror = 'The password is too weak';
            break;
          default:
            console.log('There was a problem registering.');
            this.dberror = 'There was a problem registering, please try again';
            break;
        }
        // this.dberror = e;
        setTimeout(() => this.dberror = '', 6000);
      });
  }
}
