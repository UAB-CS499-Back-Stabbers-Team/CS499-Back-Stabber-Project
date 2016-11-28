import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
// import { DbService } from "../services/db.service";
// import { FirebaseService } from "../services/firebase/firebase.service";
import { Story } from "./story/Story";
import {WorldService} from "./world.service";

@Component({
  selector: 'bsp-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  myForm: FormGroup;
  id: number;
  mono: any;
  // stories: Story[];

  dberror: string = '';

  constructor(private db: WorldService, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        mono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(516)]),
        stories: new FormArray([this.storyInit()]),
      }
    );
    // this.story = this.myForm.controls['mono'];
    // this.choice1 = this.myForm.controls['choice1'];
    // this.choice2 = this.myForm.controls['choice2'];
  }

  storyInit() {
    return new FormGroup({
      title: new FormControl(''),
      prologue: new FormControl(''),
      choices: new FormArray([this.choiceInit()])
    });
  }

  addStory() {
    (<FormArray>this.myForm.controls['stories']).push(this.storyInit());
  }

  choiceInit() {
    return new FormGroup({
      text: new FormControl(''),
      image: new FormControl('')
    });
  }

  addChoice(i: number) {
    (<FormArray>(<FormGroup>(<FormArray>this.myForm.controls['stories']).at(i)).controls['choices']).push(this.choiceInit());
  }

  success() {
    // console.log('The user was signed in.');
    // this.router.navigate(['/']);
  }

  onRemoveItem(i) {

  }

  onSubmit() {
    console.log(this.myForm);
    // const world = this.firebaseService.put('world', {this.myForm.controls['mono'].value, this.myForm.controls['story'], this.myForm.controls['choice1'].value, this.myForm.controls['choice1'].value})
    //   .then(x => {
    //     console.log('In login with success');
    //     this.success();}
    //   )
    //   .catch(e => {
    //     console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
    //     switch(e.code) {
    //       case 'auth/user-disabled':
    //         console.log('This user account has been disabled. Please contact customer service to resolve the issue.');
    //         this.dberror = this.em.value + ' account has been disabled. Please contact customer service to resolve the issue.';
    //         break;
    //       default:
    //         console.log('There was a problem signing in.');
    //         this.dberror = 'There was a problem signing in, please check your username and password and try again';
    //         break;
    //     }
    //     console.log('In login with error ' + e);
    //     // this.dberror = e;
    //     setTimeout(() => this.dberror = '', 6000);
    //   });
  }
}
