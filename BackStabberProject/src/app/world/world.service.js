"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var World_1 = require("./World");
var Story_1 = require("./story/Story");
var WorldService = (function () {
    function WorldService(db, ss) {
        var _this = this;
        this.db = db;
        this.ss = ss;
        this.dbPath = 'world';
        this.keys = [];
        this.items = {};
        this.done = false;
        this.cr = this.db.getChildRef(this.dbPath);
        this.getAll(function (snapShot) { return _this.process(snapShot); });
        console.log(this.items);
    }
    WorldService.prototype.ngOnDestroy = function () {
        this.cr.off();
    };
    WorldService.prototype.getItemById = function (id) {
        var x = this.items[id];
        if (x)
            return x;
        else
            return null;
    };
    WorldService.prototype.getItemByIndex = function (i) {
        return this.items[this.keys[i]];
    };
    WorldService.prototype.keyExists = function (key) {
        return this.cr.once('value').exists(key);
    };
    WorldService.prototype.getChildRef = function (path) {
        return this.db.getChildRef(path);
    };
    WorldService.prototype.getAll = function (func) {
        return this.cr.on('value', func);
    };
    WorldService.prototype.remove = function (i) {
        this.cr.child(this.keys[i]).remove();
    };
    WorldService.prototype.set = function (item) {
        console.log(item);
        if (item.id == null)
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
                _this.items[s.key] = new World_1.World(v.id, v.name, v.prologue, v.imageURL, _this.storyProcess(v.stories));
            });
        }
        this.done = true;
    };
    WorldService.prototype.storyProcess = function (stories) {
        var ar = [];
        if (stories != null) {
            for (var i = 0; i < stories.length; i++) {
                var x = stories[i];
                ar.push(new Story_1.Story(x.id, x.worldId, x.title, x.prologue, x.choice1Text, x.choice1Rule, x.choice2Text, x.choice2Rule));
            }
            return ar;
        }
        else {
            return [];
        }
    };
    // public choiceProcess(items: Choice[]) {
    //   let ar = [];
    //
    //   if(items != null) {
    //     for(var i = 0; i < items.length; i++) {
    //       let x = items[i];
    //       ar.push(new Choice(x.id, x.text, x.moralRule));
    //     }
    //     return ar;
    //   } else {
    //     return [];
    //   }
    // }
    WorldService.prototype.getImageUrl = function (path, success, error) {
        return this.ss.getFileUrl(path, success, error);
    };
    WorldService = __decorate([
        core_1.Injectable()
    ], WorldService);
    return WorldService;
}());
exports.WorldService = WorldService;
//# sourceMappingURL=world.service.js.map