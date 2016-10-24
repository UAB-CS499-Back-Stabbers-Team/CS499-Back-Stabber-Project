"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var userAuth_1 = require("../../services/userAuth");
var NavComponent = (function () {
    function NavComponent(authService) {
        this.authService = authService;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.authUser = new userAuth_1.UserAuth();
    };
    NavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.authSub = this.authService.onAuthStateChanged().subscribe(function (x) { return _this.auth(x); });
    };
    NavComponent.prototype.auth = function (x) {
        if (x !== null) {
            this.authUser = x;
            if (this.authUser.email)
                this.isAuth = true;
            else
                this.isAuth = false;
        }
        else
            this.authUser = new userAuth_1.UserAuth();
    };
    NavComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.authSub.unsubscribe();
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'bsp-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css']
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map