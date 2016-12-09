import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StorageService } from "../../services/storage.service";
import { MessageService } from "../../message/message.service";
import { WorldService } from "../world.service";
import { World } from "../World";
import { Choice } from "../story/choice/Choice";

@Component({
  selector: 'bsp-world-edit',
  templateUrl: './world-edit.component.html',
  styleUrls: ['./world-edit.component.css']
})
export class WorldEditComponent implements OnInit, OnChanges {
  subscription: Subscription;
  isNew: boolean;
  item: World;
  index: number;
  mainForm: FormGroup;
  valid: boolean = false;
  // imageFullUrl: string = '';
  // path: string = 'world';

  constructor(private route: ActivatedRoute, private router: Router,
              private db: WorldService, private formBuilder: FormBuilder,
              private ms: MessageService, private ss: StorageService) { }

  ngOnInit() {
    // console.log('Ng On Init');
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          console.log('in params');
          this.isNew = false;
          this.index = +params['id'];
          this.item = this.db.getItemByIndex(this.index);
        } else {
          this.isNew = true;
          this.item = new World(null, '', '', '', []);
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

  private initForm() {
    let name = '';
    let imageUrl = '';
    let prologue = '';

    if (!this.isNew) {
      name = this.item.name;
      imageUrl = this.item.imageURL;
      prologue = this.item.prologue;
    }

    this.mainForm = this.formBuilder.group({
      name: [name, Validators.required],
      prologue: [prologue, Validators.required],
      imagePath: [imageUrl, Validators.required]
    });
    console.log(this.mainForm);
  }

  onSubmit() {
    console.log(this.mainForm);
    let v = this.mainForm.value;
    this.item.name = v.name;
    this.item.prologue = v.prologue;
    this.item.imageURL = v.imagePath;
    if(this.item.imageURL == '') {
      alert('item image is blank');
    } else if(v.imagePath == '') {
      alert('imagePath is blank');
    }
    // console.log(v.imagePath);
    // console.log(this.mainForm);
    // console.log(v);
    // console.log(this.item);
    // console.log("Files");

    this.db.set(this.item);
    if(this.isNew) this.router.navigate(['../world/:id/story/new']);
    else this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['../']);
  }

  onCancel() {
    this.router.navigate(['../world']);
  }

  addStory() {
    this.router.navigate(['../world/' + this.index + '/new'])
  }

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
