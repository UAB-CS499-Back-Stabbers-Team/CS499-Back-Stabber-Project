import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./header/nav/nav.component";
import {DropdownDirective} from "./directives/dropdown.directive";
import {UserComponent} from "./user/user.component";
import {UserProfileEditComponent} from "./user/user-profile/user-profile-edit.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {UserAccountComponent} from "./user/user-account/user-account.component";
import {UserAccountEditComponent} from "./user/user-account/user-account-edit.component";
import {LoginSignupComponent} from "./login-signup/login-signup.component";
import {LoginComponent} from "./login-signup/login/login.component";
import {SignupComponent} from "./login-signup/signup/signup.component";
import {RangeValidatorDirective} from "./shared/validation/rangeValidator.directive";
import {EqualValidator} from "./shared/validation/EqualValidator.directive";
import {WorldComponent} from "./world/world.component";
import {StoryComponent} from "./world/story/story.component";
import {ChoiceComponent} from "./world/story/choice/choice.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    DropdownDirective,
    UserComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    UserAccountComponent,
    UserAccountEditComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    RangeValidatorDirective,
    EqualValidator,
    WorldComponent,
    StoryComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CustomFormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
