"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var userAuth_1 = require("./userAuth");
var AuthService = (function () {
    function AuthService(dbService, messageService, router) {
        this.dbService = dbService;
        this.messageService = messageService;
        this.router = router;
        this.authUser = new userAuth_1.UserAuth();
    }
    AuthService.prototype.signinUser = function (email, pass) {
        return this.dbService.signinUser(email, pass);
    };
    AuthService.prototype.signOut = function () {
        var temp = this.dbService.signOut();
        this.router.navigate(['/']);
        return temp;
    };
    AuthService.prototype.createUser = function (email, pass) {
        return this.dbService.createUser(email, pass);
        // console.log(user.json);
    };
    AuthService.prototype.onAuthStateChanged = function () {
        var _this = this;
        var subject = new Rx_1.Subject();
        this.authSub = this.dbService.onAuthStateChanged().subscribe(function (x) {
            _this.updateCurrentUser(x);
            subject.next(_this.authUser);
        }, function (e) {
            _this.signOut();
        });
        return subject.asObservable();
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.authUser;
    };
    AuthService.prototype.getCurrentUserEmail = function () {
        return this.authUser.email;
    };
    AuthService.prototype.resetCurrentUser = function () {
        this.authUser = new userAuth_1.UserAuth();
    };
    AuthService.prototype.updateCurrentUser = function (temp) {
        if (temp) {
            this.authUser.uid = temp.uid;
            this.authUser.displayName = temp.displayName;
            this.authUser.email = temp.email;
            this.authUser.photoURL = temp.photoURL;
            this.authUser.providerId = temp.providerId;
        }
        else {
            this.resetCurrentUser();
        }
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.authSub.unsubscribe;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map