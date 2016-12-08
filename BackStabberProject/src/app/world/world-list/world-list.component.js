"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WorldListComponent = (function () {
    function WorldListComponent(db, router, ms) {
        this.db = db;
        this.router = router;
        this.ms = ms;
    }
    WorldListComponent.prototype.choice = function (i) {
        this.router.navigate(['../world/' + i]);
    };
    WorldListComponent.prototype.remove = function (i) {
        if (confirm('This will completely remove the item. Choose confirm to continue in removing the item or cancel.'))
            this.db.remove(i);
    };
    WorldListComponent.prototype.edit = function (i) {
        this.router.navigate(['world/' + i + '/edit']);
    };
    WorldListComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world-list',
            templateUrl: './world-list.component.html',
            styleUrls: ['./world-list.component.css']
        })
    ], WorldListComponent);
    return WorldListComponent;
}());
exports.WorldListComponent = WorldListComponent;
//# sourceMappingURL=world-list.component.js.map