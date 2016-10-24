import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FirebaseService} from "../services/firebase/firebase.service";

@Component({
  selector: 'bsp-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class StoryComponent implements OnInit {
  myForm: FormGroup;
  mono: FormControl;
  choice1: FormControl;
  choice2: FormControl;
  dberror: string = '';
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        mono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(516)]),
        choice1: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]),
        choice2: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)])
      }
    );
    this.story = this.myForm.controls['mono'];
    this.choice1 = this.myForm.controls['choice1'];
    this.choice2 = this.myForm.controls['choice2'];
  }

  success() {
    console.log('The user was signed in.');
    this.router.navigate(['/']);
  }

  onSubmit() {
    const world = this.firebaseService.put(this.myForm.controls['mono'].value, this.myForm.controls['choice1'].value, this.myForm.controls['choice1'].value)
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
