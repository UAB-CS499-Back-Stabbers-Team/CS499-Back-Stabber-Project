"use strict";
var user_account_edit_component_1 = require("./user-account/user-account-edit.component");
var user_profile_edit_component_1 = require("./user-profile/user-profile-edit.component");
var user_account_component_1 = require("./user-account/user-account.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
exports.USER_ROUTES = [
    { path: '', component: user_profile_component_1.UserProfileComponent, pathMatch: 'full' },
    { path: 'account', component: user_account_component_1.UserAccountComponent },
    { path: 'profile/edit', component: user_profile_edit_component_1.UserProfileEditComponent },
    { path: 'account/edit', component: user_account_edit_component_1.UserAccountEditComponent },
];
//# sourceMappingURL=user.routing.js.map