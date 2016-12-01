"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var role_1 = require("./role");
// declare var firebase: any;
var RolesService = (function () {
    function RolesService(db) {
        var _this = this;
        this.db = db;
        // public db = firebase.database();
        this.dbpath = 'roles';
        this.keys = [];
        this.items = {};
        // this.ref = this.db.getRef();
        this.cr = this.db.getChildRef(this.dbpath);
        this.getAll(function (snapShot) { return _this.process(snapShot); });
    }
    RolesService.prototype.ngOnDestroy = function () {
        this.cr.off();
    };
    RolesService.prototype.getItemByIndex = function (i) {
        return this.items[this.keys[i]];
    };
    RolesService.prototype.keyExists = function (key) {
        return this.cr.once('value').exists(key);
    };
    // public getChildRef(path: any) {
    //   return this.db.getChildRef(path);
    // }
    RolesService.prototype.getAll = function (func) {
        return this.cr.on('value', func);
    };
    RolesService.prototype.remove = function (i) {
        this.cr.child(this.keys[i]).remove();
    };
    RolesService.prototype.set = function (item) {
        if (item.id == '')
            item.id = this.cr.push().key;
        this.cr.child(item.id).set(item);
    };
    RolesService.prototype.process = function (snap) {
        var _this = this;
        this.items = {};
        this.keys = [];
        if (snap.val() != null) {
            snap.forEach(function (s) {
                _this.keys.push(s.key);
                _this.items[s.key] = new role_1.Role(s.val().name, s.key);
            });
        }
    };
    RolesService = __decorate([
        core_1.Injectable()
    ], RolesService);
    return RolesService;
}());
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map