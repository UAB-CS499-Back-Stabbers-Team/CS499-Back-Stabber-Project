import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import {MessageService} from "../../message/message.service";
import {WorldService} from "../world.service";
import {World} from "../World";

@Component({
  selector: 'bsp-world-detail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})
export class WorldDetailComponent implements OnInit {
  index: number;
  item: World;
  subscription: Subscription;

  constructor(private db: WorldService, private router: Router, private ms: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.index = +params['id'];
          while(!this.db.done) {}
          this.item = this.db.getItemByIndex(this.index);
          console.log(this.item);
        } else {
          this.ms.error('The selected World was not found');
          this.navigateBack();
        }
      }
    );
  }

  edit() {
    this.router.navigate(['/world/' + this.index + '/edit']);
  }

  navigateBack() {
    this.router.navigate(['../']);
  }
}
