import { Component, OnInit } from '@angular/core';
import {World} from "../World";

@Component({
  selector: 'bsp-world-edit',
  templateUrl: './world-edit.component.html',
  styleUrls: ['./world-edit.component.css']
})
export class WorldEditComponent implements OnInit {
  isNew: boolean;
  index: number;
  world: World;
  constructor() { }

  ngOnInit() {
    // this.subscription = this.route.params.subscribe(
    //   (params: any) => {
    //     if(params.hasOwnProperty('id')) {
    //       this.isNew = false;
    //       this.index = +params['id'];
    //       this.oldItem = this.recipeService.getRecipe(this.recipeIndex);
    //     } else {
    //       this.isNew = true;
    //       this.recipe = null;
    //     }
    //     this.initForm();
    //   }
    // );
  }

}
