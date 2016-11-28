import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Choice } from "./Choice";

@Component({
  selector: 'bsp-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  // @Input() editMode: boolean;
  // @Input() choice: Choice;
  // myForm : FormGroup;
  //
  // ngOnInit() {
  //   this.myForm = new FormGroup(
  //     {
  //       seq: new FormControl('', [Validators.required, Validators. Validators.minLength(1), Validators.maxLength(2)]),
  //       mono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(516)]),
  //       // choices: new FormArray({this.initChoice()}) //new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]),
  //     }
  //   );
  // }
  //
  // formGroup() : FormGroup {
  //   return this.myForm;
  // }
}
