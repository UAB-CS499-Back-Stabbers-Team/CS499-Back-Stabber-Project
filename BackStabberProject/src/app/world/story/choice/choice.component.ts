import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bsp-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  @Input() editMode: boolean;
  @Input() id: number;
  @Input() image: any;
  @Input() text: string;
}
