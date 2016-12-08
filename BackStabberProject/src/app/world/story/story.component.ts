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
  storyIndex: number;
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
            this.item = new Story('', '', '', '', []);
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

  initChoice() {
    return new FormControl('', []);
  }

  private initForm() {
    let choicesArray = new FormArray([]);
    for(let i = 0; i < this.item.choices.length; i++) {
      choicesArray.push(new FormGroup(
        {
          text: new FormControl(this.item.choices[i].text, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
          moralRule: new FormControl(this.item.choices[i].moralRule),
        }
        )
      );
    }

    this.mainForm = this.formBuilder.group({
      title: [this.item.title, Validators.required],
      prologue: [this.item.prologue, Validators.required],
      choices: choicesArray
    });
    console.log(this.mainForm);
  }

  navigateBack() {
    this.router.navigate(['../']);
  }

  onCancel() {
    this.router.navigate(['../world']);
  }

  // onSubmit() {
  //   console.log(this.mainForm);
  //   let v = this.mainForm.value;
  //   this.item.name = v.name;
  //   this.item.prologue = v.prologue;
  //   this.item.imageURL = v.imagePath;
  //   if(this.item.imageURL == '') {
  //     alert('item image is blank');
  //   } else if(v.imagePath == '') {
  //     alert('imagePath is blank');
  //   }
  //   // console.log(v.imagePath);
  //   // console.log(this.mainForm);
  //   // console.log(v);
  //   // console.log(this.item);
  //   // console.log("Files");
  //
  //   this.db.set(this.item);
  //   // this.router.navigate(['../world/:id/story/:sid']);
  // }
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
