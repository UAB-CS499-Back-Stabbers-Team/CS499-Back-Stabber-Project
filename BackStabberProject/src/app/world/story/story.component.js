"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var Story_1 = require("./Story");
var StoryComponent = (function () {
    function StoryComponent(db, router, route, formBuilder, ms) {
        this.db = db;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.ms = ms;
        this.choices = [];
        this.storyIndex = null;
        this.valid = false;
    }
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('worldIndex')) {
                _this.worldIndex = +params['worldIndex'];
                _this.world = _this.db.getItemByIndex(_this.worldIndex);
                if (params.hasOwnProperty('storyIndex')) {
                    console.log('in params');
                    _this.isNew = false;
                    _this.storyIndex = +params['storyIndex'];
                    _this.item = _this.world.stories[_this.storyIndex];
                    if (_this.world != null) {
                        if (_this.item) {
                            _this.path = 'world/' + _this.world.id + '/stories/' + _this.item.id;
                        }
                        else {
                            _this.router.navigate(['../world/:id/story/new']);
                        }
                    }
                    else {
                        _this.ms.error('The item does not exist with the given ID');
                        _this.navigateBack();
                    }
                }
                else {
                    _this.isNew = true;
                    _this.item = new Story_1.Story(Date.now().toString(), '', '', '', '', '', '', '');
                }
            }
        });
        // console.log('outside params');
        this.initForm();
        // this.db.set(new World(null, 'test', 'test','test',[]));
    };
    StoryComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StoryComponent.prototype.ngOnChanges = function () {
        this.valid = this.mainForm.valid;
        console.log("Valid: " + this.valid);
    };
    StoryComponent.prototype.initChoice = function (txt, rule) {
        return new forms_1.FormGroup({
            text: new forms_1.FormControl(txt, [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(32)]),
            moralRule: new forms_1.FormControl(rule)
        });
    };
    StoryComponent.prototype.initForm = function () {
        this.mainForm = this.formBuilder.group({
            title: [this.item.title, forms_1.Validators.required],
            prologue: [this.item.prologue, forms_1.Validators.required],
            choice1Rule: [this.item.choice1Rule, forms_1.Validators.required],
            choice1Text: [this.item.choice1Text, forms_1.Validators.required],
            choice2Rule: [this.item.choice2Rule, forms_1.Validators.required],
            choice2Text: [this.item.choice2Text, forms_1.Validators.required]
        });
        console.log(this.mainForm);
    };
    StoryComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    StoryComponent.prototype.onCancel = function () {
        this.router.navigate(['../world']);
    };
    // onRemoveChoice(i) {
    //   this.item.choices.splice( i, 1 );
    // }
    StoryComponent.prototype.onAddChoice = function () {
        this.mainForm.controls['choices'].push(this.initChoice('', ''));
    };
    StoryComponent.prototype.onSubmit = function () {
        console.log(this.mainForm);
        var v = this.mainForm.value;
        this.item.worldId = this.world.id;
        this.item.title = v.name;
        this.item.prologue = v.prologue;
        this.item.choice1Text = v.choice1Text;
        this.item.choice1Rule = v.choice1Rule;
        this.item.choice2Text = v.choice2Text;
        this.item.choice2Rule = v.choice2Rule;
        // console.log(v.imagePath);
        // console.log(this.mainForm);
        // console.log(v);
        // console.log(this.item);
        // console.log("Files");
        this.db.set(this.world);
        //   // this.router.navigate(['../world/:id/story/:sid']);
    };
    StoryComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world',
            templateUrl: './story.component.html',
            styleUrls: ['./story.component.css']
        })
    ], StoryComponent);
    return StoryComponent;
}());
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map