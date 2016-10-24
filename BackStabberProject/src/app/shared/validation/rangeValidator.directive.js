"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RangeValidatorDirective = (function () {
    function RangeValidatorDirective(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    Object.defineProperty(RangeValidatorDirective.prototype, "cwcRangeValidator", {
        // public value = '';
        set: function (value) {
            if (value) {
                console.log('value: ' + value);
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else {
                console.log('no value');
                this.vcRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input()
    ], RangeValidatorDirective.prototype, "cwcRangeValidator");
    RangeValidatorDirective = __decorate([
        core_1.Directive({ selector: '[cwcRangeValidator]' })
    ], RangeValidatorDirective);
    return RangeValidatorDirective;
}());
exports.RangeValidatorDirective = RangeValidatorDirective;
//# sourceMappingURL=rangeValidator.directive.js.map