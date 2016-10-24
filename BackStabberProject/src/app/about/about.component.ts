import { Component, OnInit } from '@angular/core';
import {RangeValidatorDirective} from "../shared/validation/rangeValidator.directive";

@Component({
  selector: 'bsp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tempp: string;
  constructor() { }

  ngOnInit() {
  }

}
