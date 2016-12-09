"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var FirebaseService = (function () {
    function FirebaseService() {
        this.db = firebase.database();
        this.auth = firebase.auth();
        this.subject = new Rx_1.Subject();
        this.auser = {
            email: null,
            uid: null,
            displayName: null,
            photoURL: null,
            providerId: null
        };
    }
    FirebaseService.prototype.getDb = function () {
        return this.db;
    };
    FirebaseService.prototype.signinUser = function (email, pass) {
        return this.auth.signInWithEmailAndPassword(email, pass);
    };
    FirebaseService.prototype.createUser = function (email, pass) {
        return this.auth.createUserWithEmailAndPassword(email, pass);
    };
    FirebaseService.prototype.onAuthStateChanged = function () {
        var _this = this;
        this.auth.onAuthStateChanged(function (x) {
            if (x) {
                _this.auser.uid = x.uid;
                _this.auser.email = x.email;
                _this.auser.displayName = x.displayName;
                _this.auser.photoURL = x.photoURL;
                _this.auser.providerId = x.providerId;
            }
            else {
                _this.auser.uid = null;
                _this.auser.email = null;
                _this.auser.displayName = null;
                _this.auser.photoURL = null;
                _this.auser.providerId = null;
            }
            _this.subject.next(_this.auser);
        }, function (e) {
            _this.subject.error(e);
        });
        return this.subject.asObservable();
    };
    FirebaseService.prototype.getCurrentUser = function () {
        this.auth.currentUser();
    };
    FirebaseService.prototype.signOut = function () {
        return this.auth.signOut();
    };
    FirebaseService.prototype.getRef = function () {
        return this.db.ref();
    };
    FirebaseService.prototype.getChildRef = function (child) {
        return this.getRef().child(child);
    };
    // getAll(path: string) {
    //   let ar = path.split('/');
    //   const ref = this.getRef().child(ar[0]);
    // }
    // get(key: string) {
    //   // this.db.ref('objects').set({toast: 'whole grain'});
    //   const dbRefObject = this.db.ref().child('objects'); // create the object reference
    //   dbRefObject.on('value', snap => console.log(snap.val())); // value is the event type that will sync the data realtime
    //   // console.log(ref);
    //
    //   // list
    //   const dbRefList = dbRefObject.child('hobbies');
    //   dbRefList.on('child_added', snap => console.log(snap.val()));
    // }
    FirebaseService.prototype.put = function (path, data) {
        this.getChildRef(path).set(data);
    };
    FirebaseService = __decorate([
        core_1.Injectable()
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map