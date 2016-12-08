import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {WorldService} from "../world.service";
import {MessageService} from "../../message/message.service";

@Component({
  selector: 'bsp-world-list',
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css']
})
export class WorldListComponent {

  constructor(private db: WorldService, private router: Router, private ms: MessageService) { }

  choice(i: number) {
    this.router.navigate(['../world/' + i]);
  }

  remove(i: number) {
    if(confirm('This will completely remove the item. Choose confirm to continue in removing the item or cancel.'))
      this.db.remove(i);
  }

  edit(i: number) {
    this.router.navigate(['world/' + i + '/edit']);
  }
}
