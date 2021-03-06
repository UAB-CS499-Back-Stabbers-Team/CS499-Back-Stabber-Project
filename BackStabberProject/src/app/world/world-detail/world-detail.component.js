"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WorldDetailComponent = (function () {
    function WorldDetailComponent(db, router, ms, route) {
        this.db = db;
        this.router = router;
        this.ms = ms;
        this.route = route;
    }
    WorldDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.index = +params['id'];
                while (!_this.db.done) { }
                _this.item = _this.db.getItemByIndex(_this.index);
                console.log(_this.item);
            }
            else {
                _this.ms.error('The selected World was not found');
                _this.navigateBack();
            }
        });
    };
    WorldDetailComponent.prototype.edit = function () {
        this.router.navigate(['/world/' + this.index + '/edit']);
    };
    WorldDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    WorldDetailComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world-detail',
            templateUrl: './world-detail.component.html',
            styleUrls: ['./world-detail.component.css']
        })
    ], WorldDetailComponent);
    return WorldDetailComponent;
}());
exports.WorldDetailComponent = WorldDetailComponent;
//# sourceMappingURL=world-detail.component.js.map