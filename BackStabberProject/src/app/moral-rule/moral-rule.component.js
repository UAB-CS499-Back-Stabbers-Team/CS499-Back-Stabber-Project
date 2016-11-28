"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var moral_rule_service_1 = require("./moral-rule.service");
var MoralRuleComponent = (function () {
    function MoralRuleComponent(db, fb, messageService) {
        this.db = db;
        this.fb = fb;
        this.messageService = messageService;
        this.selectedKey = null;
        this.editing = 'New Rule';
        this.path = 'moral-rules';
    }
    MoralRuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moralRuleForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(32)])
        });
        this.clear();
        this.obj = this.db.getAll(function (s) { return _this.process(s); });
        // this.obj = this.db.process(s => this.start());
    };
    MoralRuleComponent.prototype.start = function () {
        this.keys = this.db.getKeys();
        this.rules = this.db.getRules();
        // console.log(this.keys);
    };
    MoralRuleComponent.prototype.process = function (snap) {
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
    MoralRuleComponent.prototype.edit = function (i) {
        this.isNew = false;
        this.selectedKey = this.keys[i];
        this.oldRule = this.rules[this.keys[i]];
        this.editing = this.oldRule.name;
    };
    MoralRuleComponent.prototype.remove = function (i) {
        if (confirm('Are you sure you want to remove ' + this.rules[this.keys[i]].name + ' from the database?')) {
            this.db.remove(this.path + '/' + this.keys[i]);
            this.clear();
        }
        ;
    };
    MoralRuleComponent.prototype.onSubmit = function () {
        this.newRule = this.moralRuleForm.value;
        var path = this.selectedKey === null ? this.newRule.name.toLowerCase() : this.selectedKey;
        this.db.set(path, this.newRule);
        this.clear();
    };
    MoralRuleComponent.prototype.onCancel = function () {
        this.clear();
    };
    MoralRuleComponent.prototype.clear = function () {
        this.moralRuleForm.reset();
        this.selectedKey = null;
        this.newRule = '';
        this.oldRule = '';
        this.isNew = true;
        this.editing = 'New Rule';
    };
    MoralRuleComponent.prototype.ngOnDestroy = function () {
        // this.obj.off();
    };
    MoralRuleComponent = __decorate([
        core_1.Component({
            selector: 'bsp-moral-rule',
            templateUrl: './moral-rule.component.html',
            styleUrls: ['./moral-rule.component.css'],
            providers: [moral_rule_service_1.MoralRuleService]
        })
    ], MoralRuleComponent);
    return MoralRuleComponent;
}());
exports.MoralRuleComponent = MoralRuleComponent;
//# sourceMappingURL=moral-rule.component.js.map