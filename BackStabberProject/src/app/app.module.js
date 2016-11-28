"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// import { CustomFormsModule } from 'ng2-validation';
var app_component_1 = require('./app.component');
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var header_component_1 = require("./header/header.component");
var nav_component_1 = require("./header/nav/nav.component");
var dropdown_directive_1 = require("./directives/dropdown.directive");
var user_component_1 = require("./user/user.component");
var user_profile_edit_component_1 = require("./user/user-profile/user-profile-edit.component");
var user_profile_component_1 = require("./user/user-profile/user-profile.component");
var user_account_component_1 = require("./user/user-account/user-account.component");
var user_account_edit_component_1 = require("./user/user-account/user-account-edit.component");
var login_signup_component_1 = require("./login-signup/login-signup.component");
var login_component_1 = require("./login-signup/login/login.component");
var signup_component_1 = require("./login-signup/signup/signup.component");
var rangeValidator_directive_1 = require("./shared/validation/rangeValidator.directive");
var EqualValidator_directive_1 = require("./shared/validation/EqualValidator.directive");
var world_component_1 = require("./world/world.component");
var story_component_1 = require("./world/story/story.component");
var choice_component_1 = require("./world/story/choice/choice.component");
var moral_rule_component_1 = require("./moral-rule/moral-rule.component");
var world_list_component_1 = require("./world/world-list/world-list.component");
var world_edit_component_1 = require("./world/world-edit/world-edit.component");
var world_detail_component_1 = require("./world/world-detail/world-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                dropdown_directive_1.DropdownDirective,
                user_component_1.UserComponent,
                user_profile_component_1.UserProfileComponent,
                user_profile_edit_component_1.UserProfileEditComponent,
                user_account_component_1.UserAccountComponent,
                user_account_edit_component_1.UserAccountEditComponent,
                login_signup_component_1.LoginSignupComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                rangeValidator_directive_1.RangeValidatorDirective,
                EqualValidator_directive_1.EqualValidator,
                world_component_1.WorldComponent,
                world_list_component_1.WorldListComponent,
                world_edit_component_1.WorldEditComponent,
                world_detail_component_1.WorldDetailComponent,
                story_component_1.StoryComponent,
                choice_component_1.ChoiceComponent,
                moral_rule_component_1.MoralRuleComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                // CustomFormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map