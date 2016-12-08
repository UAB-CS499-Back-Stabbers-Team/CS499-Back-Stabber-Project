"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var World_1 = require("../World");
var WorldEditComponent = (function () {
    // imageFullUrl: string = '';
    // path: string = 'world';
    function WorldEditComponent(route, router, db, formBuilder, ms, ss) {
        this.route = route;
        this.router = router;
        this.db = db;
        this.formBuilder = formBuilder;
        this.ms = ms;
        this.ss = ss;
        this.valid = false;
    }
    WorldEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('Ng On Init');
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                console.log('in params');
                _this.isNew = false;
                _this.index = +params['id'];
                _this.item = _this.db.getItemByIndex(_this.index);
            }
            else {
                _this.isNew = true;
                _this.item = new World_1.World(null, '', '', '', []);
            }
        });
        // console.log('outside params');
        this.initForm();
        // this.db.set(new World(null, 'test', 'test','test',[]));
    };
    WorldEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WorldEditComponent.prototype.ngOnChanges = function () {
        this.valid = this.mainForm.valid;
        console.log("Valid: " + this.valid);
    };
    WorldEditComponent.prototype.initForm = function () {
        var name = '';
        var imageUrl = '';
        var prologue = '';
        if (!this.isNew) {
            name = this.item.name;
            imageUrl = this.item.imageURL;
            prologue = this.item.prologue;
        }
        this.mainForm = this.formBuilder.group({
            name: [name, forms_1.Validators.required],
            prologue: [prologue, forms_1.Validators.required],
            imagePath: [imageUrl, forms_1.Validators.required]
        });
        console.log(this.mainForm);
    };
    WorldEditComponent.prototype.onSubmit = function () {
        console.log(this.mainForm);
        var v = this.mainForm.value;
        this.item.name = v.name;
        this.item.prologue = v.prologue;
        this.item.imageURL = v.imagePath;
        if (this.item.imageURL == '') {
            alert('item image is blank');
        }
        else if (v.imagePath == '') {
            alert('imagePath is blank');
        }
        // console.log(v.imagePath);
        // console.log(this.mainForm);
        // console.log(v);
        // console.log(this.item);
        // console.log("Files");
        this.db.set(this.item);
        if (this.isNew)
            this.router.navigate(['../world/:id/story/new']);
        else
            this.router.navigate(['../world/:id/story/:id']);
    };
    WorldEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    WorldEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../world']);
    };
    WorldEditComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world-edit',
            templateUrl: './world-edit.component.html',
            styleUrls: ['./world-edit.component.css']
        })
    ], WorldEditComponent);
    return WorldEditComponent;
}());
exports.WorldEditComponent = WorldEditComponent;
//# sourceMappingURL=world-edit.component.js.map