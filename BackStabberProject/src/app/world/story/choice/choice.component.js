"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChoiceComponent = (function () {
    function ChoiceComponent() {
    }
    __decorate([
        core_1.Input()
    ], ChoiceComponent.prototype, "editMode");
    __decorate([
        core_1.Input()
    ], ChoiceComponent.prototype, "id");
    __decorate([
        core_1.Input()
    ], ChoiceComponent.prototype, "image");
    __decorate([
        core_1.Input()
    ], ChoiceComponent.prototype, "text");
    ChoiceComponent = __decorate([
        core_1.Component({
            selector: 'bsp-choice',
            templateUrl: './choice.component.html',
            styleUrls: ['./choice.component.css']
        })
    ], ChoiceComponent);
    return ChoiceComponent;
}());
exports.ChoiceComponent = ChoiceComponent;
//# sourceMappingURL=choice.component.js.map