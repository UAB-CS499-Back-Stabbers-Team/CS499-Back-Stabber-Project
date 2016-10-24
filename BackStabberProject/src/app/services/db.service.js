"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DbService = (function () {
    function DbService(db, messageService) {
        this.db = db;
        this.messageService = messageService;
    }
    DbService.prototype.signinUser = function (email, pass) {
        return this.db.signinUser(email, pass);
    };
    DbService.prototype.createUser = function (email, pass) {
        return this.db.createUser(email, pass);
    };
    DbService.prototype.onAuthStateChanged = function () {
        return this.db.onAuthStateChanged();
    };
    DbService.prototype.getCurrentUser = function () {
        this.db.getCurrentUser();
    };
    DbService.prototype.signOut = function () {
        return this.db.signOut();
    };
    DbService = __decorate([
        core_1.Injectable()
    ], DbService);
    return DbService;
}());
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map