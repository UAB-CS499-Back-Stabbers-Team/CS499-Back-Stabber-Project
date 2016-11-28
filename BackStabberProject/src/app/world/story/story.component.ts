import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from "../../services/firebase/firebase.service";
import {Story} from "./Story";
import {WorldService} from "../world.service";
import {Choice} from "./choice/Choice";
import {ChoiceComponent} from "./choice/choice.component";

@Component({
  selector: 'bsp-world',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  myForm: FormGroup;
  story: Story;

  dberror: string = '';

  constructor(private worldService: WorldService, private router: Router) {}

  ngOnInit() {
    // this.myForm = new FormGroup(
    //   {
    //     seq: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
    //     mono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(516)]),
    //     choices: new FormArray([new ChoiceComponent().formGroup()]) //new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]),
    //   }
    // );
    // this.mono = this.myForm.controls['mono'];
    // this.choice[0] = this.myForm.controls['choice'];
    // this.choice[1] = this.myForm.controls['choice2'];
  }

  // private initForm(id) {
    // let seq = '';
    // let recipeImageUrl = '';
    // let recipeContent = '';
    // let fa: FormArray = new FormArray([]);
    // let id: number;
    // seq: number;
    // mono: string;
    // choices: new FormArray([]);
    //
    // if (id) {
    //   if(this.recipe.hasOwnProperty('ingredients')) {
    //     for(let i = 0; i < this.recipe.ingredients.length; i++) {
    //       fa.push(
    //         new FormGroup(
    //           {
    //             name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
    //             amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
    //           }
    //         )
    //       );
    //     }
    //   }
    //   seq = this.recipe.name;
    //   recipeImageUrl = this.recipe.imagePath;
    //   recipeContent = this.recipe.description;
    // }

    // this.recipeForm = this.formBuilder.group({
    //   name: [recipeName, Validators.required],
    //   imagePath: [recipeImageUrl, Validators.required],
    //   description: [recipeContent, Validators.required],
    //   ingredients: recipeIngredients
    // });
  // }

  // private initChoice() {
  //   return new ChoiceComponent().formGroup();
  // }

  // success() {
  //   console.log('The user was signed in.');
  //   this.router.navigate(['/']);
  // }
  //
  // onSubmit() {
  //   const world = this.firebaseService.put(this.myForm.controls['mono'].value, this.myForm.controls['choice1'].value, this.myForm.controls['choice1'].value)
  //     .then(x => {
  //       console.log('In login with success');
  //       this.success();}
  //     )
  //     .catch(e => {
  //       console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
  //       switch(e.code) {
  //         case 'auth/user-disabled':
  //           console.log('This user account has been disabled. Please contact customer service to resolve the issue.');
  //           this.dberror = this.em.value + ' account has been disabled. Please contact customer service to resolve the issue.';
  //           break;
  //         default:
  //           console.log('There was a problem signing in.');
  //           this.dberror = 'There was a problem signing in, please check your username and password and try again';
  //           break;
  //       }
  //       console.log('In login with error ' + e);
  //       // this.dberror = e;
  //       setTimeout(() => this.dberror = '', 6000);
  //     });
  // }

  // public isInteger(control:FormControl) : Boolean {
  //   let value = control.value.trim();
  //   return (parseFloat(value) == parseInt(value)) && !isNaN(value);
  // }
}
