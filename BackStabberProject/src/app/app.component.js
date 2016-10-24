"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import { AngularFire } from 'angularfire2';
var firebase_service_1 = require("./services/firebase/firebase.service");
var auth_service_1 = require("./services/auth.service");
var user_service_1 = require("./user/user.service");
var message_service_1 = require("./message/message.service");
var db_service_1 = require("./services/db.service");
// declare var currentUser: any;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bsp-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [firebase_service_1.FirebaseService, auth_service_1.AuthService, user_service_1.UserService, message_service_1.MessageService, db_service_1.DbService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map