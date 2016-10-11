import {Directive, HostListener} from '@angular/core';
import {HostBinding} from "@angular/core/src/metadata/directives";

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

  constructor() { }
}
