import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "../../user/user.service";
import { AuthService } from "../../services/auth.service";
import {FirebaseService} from "../../services/firebase/firebase.service";
import {RangeValidatorDirective} from "../../shared/validation/rangeValidator.directive";

@Component({
  selector: 'bsp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  em: any;
  pass: any;
  dberror: string = '';
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
      )]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)])
      }
    );
    this.em = this.myForm.controls['email'];
    this.pass = this.myForm.controls['password'];
  }

  success() {
    console.log('The user was signed in.');
    this.router.navigate(['/']);
  }

  onSubmit() {
    const user = this.firebaseService.signinUser(this.myForm.controls['email'].value, this.myForm.controls['password'].value)
      .then(x => {
        console.log('In login with success');
        this.success();}
        )
      .catch(e => {
        console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
        switch(e.code) {
          case 'auth/user-disabled':
            console.log('This user account has been disabled. Please contact customer service to resolve the issue.');
            this.dberror = this.em.value + ' account has been disabled. Please contact customer service to resolve the issue.';
            break;
          default:
            console.log('There was a problem signing in.');
            this.dberror = 'There was a problem signing in, please check your username and password and try again';
            break;
        }
        console.log('In login with error ' + e);
        // this.dberror = e;
        setTimeout(() => this.dberror = '', 6000);
      });
  }
}
