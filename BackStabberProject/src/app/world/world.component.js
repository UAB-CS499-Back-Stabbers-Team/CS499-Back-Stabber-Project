"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var world_service_1 = require("./world.service");
var WorldComponent = (function () {
    function WorldComponent() {
    }
    WorldComponent.prototype.ngOnInit = function () {
    };
    WorldComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world',
            templateUrl: './world.component.html',
            styleUrls: ['./world.component.css'],
            providers: [world_service_1.WorldService]
        })
    ], WorldComponent);
    return WorldComponent;
}());
exports.WorldComponent = WorldComponent;
//# sourceMappingURL=world.component.js.map