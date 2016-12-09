"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var world_service_1 = require("../world/world.service");
var Story_1 = require("../world/story/Story");
var World_1 = require("../world/World");
var GameComponent = (function () {
    function GameComponent(db, ws, fbase) {
        this.db = db;
        this.ws = ws;
        this.fbase = fbase;
        this.items = [];
        this.keys = [];
        this.nums = [];
        this.selected = [];
        this.worlds = [];
        this.currentWorld = new World_1.World('', '', '', '', []);
        this.currentStory = new Story_1.Story('', '', '', '', '', '', '', '');
        this.currentWorldIndex = 0;
        this.currentStoryIndex = 1;
        this.kant = 0;
        this.util = 0;
        this.results = {};
    }
    GameComponent.prototype.ngOnInit = function () {
        // this.fb = this.fbase.getDb();
        // this.ref = this.fb.ref('world');
        // this.ref.on('value', x => this.start(x));
        // var w1 = new World('0', 'Tis is the name', 'This is the prologue', 'http://comps.canstockphoto.com/can-stock-photo_csp35252341.jpg',
        // []);
        // w1.stories.push(new Story('0',w1.id,'this is the story title', 'this is the prologue', 'choice 1 text', 'utilitarian', 'choice 2 text', 'kantian'));
        // this.items.push(w1);
        this.items = this.ws.getWorlds();
        this.currentWorld = this.items[0];
        this.start();
    };
    GameComponent.prototype.start = function () {
        // this.items = this.ws.items;//this.ws.process(data);
        // this.keys = this.ws.keys;
        // setTimeout(this.go, 3000);
        console.log(this.items);
        // console.log(this.keys);
        var max = this.ws.keys.length;
        for (var i = 0; i < max; i++) {
            this.nums.push(i);
        }
        // console.log(this.nums);
        // console.log(this.keys);
        for (var a in this.items) {
            this.selected.push(a);
        }
        // console.log(this.selected);
        var x = this.getRand(max);
        var y = this.getRand(max);
        var temp;
        for (var i = 0; i < (max * 50) - 1; i++) {
            temp = this.selected[x];
            this.selected[x] = this.selected[y];
            this.selected[y] = temp;
            x = this.getRand(max);
            y = this.getRand(max);
        }
        // console.log(this.selected);
        for (var i = 0; i < 3; i++) {
            this.worlds.push(this.selected[i]);
        }
        // console.log(this.worlds);
        // console.log(this.items[this.worlds[0]]);
        // this.next('');
    };
    GameComponent.prototype.getRand = function (x) {
        return (Math.floor(Math.random() * x));
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.ref.off();
    };
    // public process(snap: any) {
    //   this.items = {};
    //   this.keys = [];
    //
    //   if(snap.val() != null) {
    //     snap.forEach(
    //       s => {
    //         this.keys.push(s.key);
    //         let v = s.val();
    //         this.items[s.key] = s.val();// = new World(v.id, v.name, v.prologue, v.imageURL, this.storyProcess(<Story[]>v.stories));
    //       }
    //     );
    //   }
    //   // this.done = true;
    //   return this.items;
    // }
    // next(rule: string) {
    //   if(rule == 'kantian') this.kant++;
    //   if(rule == 'utilitarian') this.util++;
    //
    //   if(this.currentWorldIndex < this.worlds.length)
    //
    //   if(this.currentStoryIndex >= this.currentWorld.stories.length) {
    //     this.currentStoryIndex = 1;
    //     this.currentWorldIndex++;
    //
    //     this.currentWorld = this.items[this.worlds[this.currentWorldIndex]];
    //   }
    //   this.currentStoryIndex++;
    //
    //   if(this.currentStoryIndex >= this.currentWorld.stories.length) {
    //     this.currentStoryIndex = 1;
    //     this.currentWorldIndex++;
    //   }
    //
    //   if(this.currentWorldIndex >= this.worlds.length) {
    //     this.end();
    //   } else {
    //     this.currentWorld = this.worlds[this.currentWorldIndex];
    //   }
    // }
    GameComponent.prototype.end = function () {
        console.log(this.kant);
        console.log(this.util);
    };
    GameComponent.prototype.nextWorld = function () {
        this.currentWorldIndex++;
        if (this.currentWorldIndex >= this.items.length)
            this.end();
        else
            this.currentWorld = this.items[this.currentWorldIndex];
    };
    // nextWorld() {
    //   this.currentWorldIndex++;
    // }
    GameComponent.prototype.result = function (worldName, index, rule) {
        this.results[worldName + '/' + index] = rule;
        console.log(this.results);
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'bsp-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css'],
            providers: [world_service_1.WorldService]
        })
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map