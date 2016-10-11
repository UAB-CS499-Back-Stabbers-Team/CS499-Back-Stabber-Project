import {Directive, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: '[cwcRangeValidator]'})
export class RangeValidatorDirective {
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}

  // public value = '';
  @Input() set cwcRangeValidator(value: string) {
    if(value) {
      console.log('value: ' + value);
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      console.log('no value');
      this.vcRef.clear();
    }
  };


  // @Input() cwcRangeValidator;
  // @Input() min: number;
  // @Input() max: number;

}
