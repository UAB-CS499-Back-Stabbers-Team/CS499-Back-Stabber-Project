"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var LoginComponent = (function () {
    function LoginComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.dberror = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(128)])
        });
        this.em = this.myForm.controls['email'];
        this.pass = this.myForm.controls['password'];
    };
    LoginComponent.prototype.success = function () {
        console.log('The user was signed in.');
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = this.firebaseService.signinUser(this.myForm.controls['email'].value, this.myForm.controls['password'].value)
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
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'bsp-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map