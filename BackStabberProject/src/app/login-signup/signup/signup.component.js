"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// import {DbService} from "../../services/db.service";
var SignupComponent = (function () {
    function SignupComponent(firebaseService, messageService, router) {
        this.firebaseService = firebaseService;
        this.messageService = messageService;
        this.router = router;
        this.dberror = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)]),
            passwordConfirm: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)])
        });
        this.em = this.myForm.controls['email'];
        this.pass = this.myForm.controls['password'];
        this.passCon = this.myForm.controls['passwordConfirm'];
        // this.passConfirmed = this.passwordConfirmValidator();
    };
    SignupComponent.prototype.confPass = function () {
        console.log(this.pass);
        console.log(this.passCon);
        console.log(this.passConfirmed);
        this.passConfirmed = this.passCon.value === this.pass.value;
        console.log(this.passConfirmed);
    };
    // passwordConfirmValidator(control: FormControl): {[s: string]: boolean} {
    //   if(this.getPassValue() && (control.value !== this.getPassValue())) {
    //     return {confirmed: true};
    //   }
    //   return null;
    // }
    SignupComponent.prototype.success = function () {
        console.log('The user was created.');
        this.router.navigate(['/']);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise = this.firebaseService.createUser(this.em.value, this.pass.value)
            .then(function (e) { return _this.success(); })
            .catch(function (e) {
            console.log('There was a problem creating the user: ' + e.code + ' ' + e.message);
            switch (e.code) {
                case 'auth/email-already-in-use':
                    console.log('The email address already exists.');
                    _this.dberror = _this.em.value + ' is already registered';
                    break;
                case 'auth/invalid-email':
                    console.log('The email address is invalid.');
                    _this.dberror = _this.em.value + ' is an invalid email';
                    break;
                case 'auth/weak-password':
                    console.log('The password is too weak.');
                    _this.dberror = 'The password is too weak';
                    break;
                default:
                    console.log('There was a problem registering.');
                    _this.dberror = 'There was a problem registering, please try again';
                    break;
            }
            // this.dberror = e;
            setTimeout(function () { return _this.dberror = ''; }, 6000);
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'bsp-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css'],
            providers: []
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map