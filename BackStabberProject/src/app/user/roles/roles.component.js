"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var roles_service_1 = require("./roles.service");
var Role_ts_1 = require("./Role.ts");
var RolesComponent = (function () {
    function RolesComponent(db) {
        this.db = db;
        this.editing = 'New Role';
        this.oldItem = new Role_ts_1.Role('', '');
        this.newItem = new Role_ts_1.Role('', '');
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.mainForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(8)])
        });
    };
    RolesComponent.prototype.remove = function (i) {
        if (confirm('Are you sure you want to remove ' + this.db.items[this.db.keys[i]].name + ' from the database?')) {
            this.db.remove(i);
            this.clear();
        }
        ;
    };
    RolesComponent.prototype.edit = function (i) {
        this.isNew = false;
        this.oldItem = this.db.getItemByIndex(i);
        this.editing = this.oldItem.name;
    };
    RolesComponent.prototype.onSubmit = function () {
        this.newItem.name = this.mainForm.value.name;
        this.newItem.id = this.oldItem.id;
        this.db.set(this.newItem);
        this.clear();
    };
    RolesComponent.prototype.onCancel = function () {
        this.clear();
    };
    RolesComponent.prototype.clear = function () {
        this.mainForm.reset();
        this.newItem = new Role_ts_1.Role('', '');
        this.oldItem = new Role_ts_1.Role('', '');
        this.isNew = true;
        this.editing = 'New Rule';
    };
    RolesComponent = __decorate([
        core_1.Component({
            selector: 'roles',
            templateUrl: './roles.component.html',
            styleUrls: ['./roles.component.css'],
            providers: [roles_service_1.RolesService]
        })
    ], RolesComponent);
    return RolesComponent;
}());
exports.RolesComponent = RolesComponent;
//# sourceMappingURL=roles.component.js.map