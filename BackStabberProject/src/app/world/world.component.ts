import { Component, OnInit } from '@angular/core';
import { WorldService } from "./world.service";

@Component({
  selector: 'bsp-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
  providers: [WorldService]
})
export class WorldComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
