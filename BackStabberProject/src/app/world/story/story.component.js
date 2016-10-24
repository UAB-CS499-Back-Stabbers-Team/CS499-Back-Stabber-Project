"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var StoryComponent = (function () {
    function StoryComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.dberror = '';
    }
    StoryComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            mono: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(516)]),
            choice1: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)]),
            choice2: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)])
        });
        this.story = this.myForm.controls['mono'];
        this.choice1 = this.myForm.controls['choice1'];
        this.choice2 = this.myForm.controls['choice2'];
    };
    StoryComponent.prototype.success = function () {
        console.log('The user was signed in.');
        this.router.navigate(['/']);
    };
    StoryComponent.prototype.onSubmit = function () {
        var _this = this;
        var world = this.firebaseService.put(this.myForm.controls['mono'].value, this.myForm.controls['choice1'].value, this.myForm.controls['choice1'].value)
            .then(function (x) {
            console.log('In login with success');
            _this.success();
        })
            .catch(function (e) {
            console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
            switch (e.code) {
                case 'auth/user-disabled':
                    console.log('This user account has been disabled. Please contact customer service to resolve the issue.');
                    _this.dberror = _this.em.value + ' account has been disabled. Please contact customer service to resolve the issue.';
                    break;
                default:
                    console.log('There was a problem signing in.');
                    _this.dberror = 'There was a problem signing in, please check your username and password and try again';
                    break;
            }
            console.log('In login with error ' + e);
            // this.dberror = e;
            setTimeout(function () { return _this.dberror = ''; }, 6000);
        });
    };
    StoryComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world',
            templateUrl: './world.component.html',
            styleUrls: ['./world.component.css']
        })
    ], StoryComponent);
    return StoryComponent;
}());
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map