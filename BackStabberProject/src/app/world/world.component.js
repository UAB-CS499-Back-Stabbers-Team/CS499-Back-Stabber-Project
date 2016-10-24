"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var WorldComponent = (function () {
    function WorldComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.story = {
            premis: null,
            choice1: null,
            choice2: null
        };
        this.dberror = '';
    }
    WorldComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            story: .premis = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(516)]),
            story: .choice1, new: forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)]),
            story: .choice2, new: forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)])
        });
        this.story = this.myForm.controls['mono'];
        this.choice1 = this.myForm.controls['choice1'];
        this.choice2 = this.myForm.controls['choice2'];
    };
    WorldComponent.prototype.success = function () {
        console.log('The user was signed in.');
        this.router.navigate(['/']);
    };
    WorldComponent.prototype.onSubmit = function () {
        // const world = this.firebaseService.put('world', {this.myForm.controls['mono'].value, this.myForm.controls['story'], this.myForm.controls['choice1'].value, this.myForm.controls['choice1'].value})
        //   .then(x => {
        //     console.log('In login with success');
        //     this.success();}
        //   )
        //   .catch(e => {
        //     console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
        //     switch(e.code) {
        //       case 'auth/user-disabled':
        //         console.log('This user account has been disabled. Please contact customer service to resolve the issue.');
        //         this.dberror = this.em.value + ' account has been disabled. Please contact customer service to resolve the issue.';
        //         break;
        //       default:
        //         console.log('There was a problem signing in.');
        //         this.dberror = 'There was a problem signing in, please check your username and password and try again';
        //         break;
        //     }
        //     console.log('In login with error ' + e);
        //     // this.dberror = e;
        //     setTimeout(() => this.dberror = '', 6000);
        //   });
    };
    WorldComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world',
            templateUrl: './world.component.html',
            styleUrls: ['./world.component.css']
        })
    ], WorldComponent);
    return WorldComponent;
}());
exports.WorldComponent = WorldComponent;
//# sourceMappingURL=world.component.js.map