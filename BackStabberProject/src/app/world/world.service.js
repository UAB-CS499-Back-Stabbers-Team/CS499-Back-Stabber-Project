"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var World_1 = require("./World");
var WorldService = (function () {
    function WorldService(db) {
        var _this = this;
        this.db = db;
        this.dbPath = 'world';
        this.keys = [];
        this.items = {};
        this.cr = this.db.getChildRef(this.dbPath);
        this.getAll(function (snapShot) { return _this.process(snapShot); });
    }
    WorldService.prototype.ngOnDestroy = function () {
        this.cr.off();
    };
    WorldService.prototype.getItemByIndex = function (i) {
        return this.items[this.keys[i]];
    };
    WorldService.prototype.keyExists = function (key) {
        return this.cr.once('value').exists(key);
    };
    // public getChildRef(path: any) {
    //   return this.db.getChildRef(path);
    // }
    WorldService.prototype.getAll = function (func) {
        return this.cr.on('value', func);
    };
    WorldService.prototype.remove = function (i) {
        this.cr.child(this.keys[i]).remove();
    };
    WorldService.prototype.set = function (item) {
        if (item.id == '')
            item.id = this.cr.push().key;
        this.cr.child(item.id).set(item);
    };
    WorldService.prototype.process = function (snap) {
        var _this = this;
        this.items = {};
        this.keys = [];
        if (snap.val() != null) {
            snap.forEach(function (s) {
                _this.keys.push(s.key);
                var v = s.val();
                _this.items[s.key] = new World_1.World(s.key, v.name, v.prologue, v.image, v.stories);
            });
        }
    };
    WorldService = __decorate([
        core_1.Injectable()
    ], WorldService);
    return WorldService;
}());
exports.WorldService = WorldService;
//# sourceMappingURL=world.service.js.map