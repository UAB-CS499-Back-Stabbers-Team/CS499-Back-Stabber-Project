import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { WorldService } from "../world.service";
import { Story } from "./Story";
import { Choice } from "./choice/Choice";
import { ChoiceComponent } from "./choice/choice.component";
import { MessageService } from "../../message/message.service";
import { World } from "../World";

@Component({
  selector: 'bsp-world',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  myForm: FormGroup;
  world: World;
  item: Story;
  choices = [];
  subscription: Subscription;
  isNew: boolean;
  worldIndex: number;
  storyIndex: number = null;
  mainForm: FormGroup;
  valid: boolean = false;
  path: string;

  constructor(private db: WorldService, private router: Router, private route: ActivatedRoute,
              private formBuilder: FormBuilder, private ms: MessageService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('worldIndex')) {
          this.worldIndex = +params['worldIndex'];
          this.world = this.db.getItemByIndex(this.worldIndex);

          if (params.hasOwnProperty('storyIndex')) {
            console.log('in params');
            this.isNew = false;
            this.storyIndex = +params['storyIndex'];
            this.item = this.world.stories[this.storyIndex];
            if(this.world != null) {
              if (this.item) {
                this.path = 'world/' + this.world.id + '/stories/' + this.item.id;
              } else {
                this.router.navigate(['../world/:id/story/new']);
              }
            } else {
              this.ms.error('The item does not exist with the given ID');
              this.navigateBack();
            }
          } else {
            this.isNew = true;
            this.item = new Story(Date.now(), '', '', '', '', '', '', '');
          }
        }
      }
    );
    // console.log('outside params');
    this.initForm();
    // this.db.set(new World(null, 'test', 'test','test',[]));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    this.valid = this.mainForm.valid;
    console.log("Valid: " + this.valid);
  }

  initChoice(txt, rule) {
    return new FormGroup({
      text: new FormControl(txt, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
      moralRule: new FormControl(rule)
    })
  }

  private initForm() {
    this.mainForm = this.formBuilder.group({
      title: [this.item.title, Validators.required],
      prologue: [this.item.prologue, Validators.required],
      choice1Rule: [this.item.choice1Rule, Validators.required],
      choice1Text: [this.item.choice1Text, Validators.required],
      choice2Rule: [this.item.choice2Rule, Validators.required],
      choice2Text: [this.item.choice2Text, Validators.required],
    });
    console.log(this.mainForm);
  }

  navigateBack() {
    this.router.navigate(['../']);
  }

  onCancel() {
    this.router.navigate(['../world']);
  }

  // onRemoveChoice(i) {
  //   this.item.choices.splice( i, 1 );
  // }

  onAddChoice() {
    (<FormArray>this.mainForm.controls['choices']).push(this.initChoice('',''));
  }

  onSubmit() {
    console.log(this.mainForm);
    let v = this.mainForm.value;
    this.item.worldId = this.world.id;
    this.item.title = v.name;
    this.item.prologue = v.prologue;
    this.item.choice1Text = v.choice1Text;
    this.item.choice1Rule = v.choice1Rule;
    this.item.choice2Text = v.choice2Text;
    this.item.choice2Rule = v.choice2Rule;
    // console.log(v.imagePath);
    // console.log(this.mainForm);
    // console.log(v);
    // console.log(this.item);
    // console.log("Files");

    this.db.set(this.world);
  //   // this.router.navigate(['../world/:id/story/:sid']);
  }
  //
  // navigateBack() {
  //   this.router.navigate(['../']);
  // }
  //
  // onCancel() {
  //   this.navigateBack();
  // }

  // imageUpdate() {
  //   alert(this.mainForm.value.imageURL);
  //   console.log(this.path + '/' + this.mainForm.value.imageURL);
  //   this.db.getImageUrl(this.path + '/' + this.mainForm.value.imageURL, this.updateImageURL, this.ms.error)
  // }
  //
  // updateImageURL(img) {
  //   this.imageFullUrl = img;
  //   alert(img);
  // }

}
