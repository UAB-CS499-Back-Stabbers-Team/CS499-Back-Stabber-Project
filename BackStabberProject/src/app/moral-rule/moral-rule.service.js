"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MoralRuleService = (function () {
    function MoralRuleService() {
        this.dbpath = 'moral-rules';
        this.db = firebase.database();
        this.ref = this.db.ref();
        this.mr = this.ref.child(this.dbpath);
    }
    // constructor(private db: DbService) {}
    MoralRuleService.prototype.ngOnInit = function () {
        // this.getAll(s => this.process(s));
    };
    MoralRuleService.prototype.ngOnDestroy = function () {
        this.ref.off();
    };
    MoralRuleService.prototype.keyExists = function (key) {
        return this.mr.once('value').exists(key.toLowerCase());
    };
    MoralRuleService.prototype.getChildRef = function (path) {
        return this.ref.child(path);
    };
    MoralRuleService.prototype.getAll = function (func) {
        return this.mr.on('value', func);
        // return [
        //   new MoralRule('Kantian'),
        //   new MoralRule('Utilitarian')
        // ];
    };
    MoralRuleService.prototype.remove = function (path) {
        this.ref.child(path).remove();
    };
    MoralRuleService.prototype.set = function (path, rule) {
        this.mr.child(path).set(rule);
    };
    MoralRuleService.prototype.process = function (snap) {
        var _this = this;
        this.rules = {};
        this.keys = new Array();
        if (snap.val() != null) {
            snap.forEach(function (s) {
                _this.rules[s.key] = s.val();
                _this.keys.push(s.key);
            });
        }
    };
    MoralRuleService.prototype.getKeys = function () {
        return this.keys;
    };
    MoralRuleService.prototype.getRules = function () {
        return this.rules;
    };
    MoralRuleService = __decorate([
        core_1.Injectable()
    ], MoralRuleService);
    return MoralRuleService;
}());
exports.MoralRuleService = MoralRuleService;
//# sourceMappingURL=moral-rule.service.js.map