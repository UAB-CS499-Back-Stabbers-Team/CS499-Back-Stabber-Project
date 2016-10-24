"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var user_routing_1 = require("./user/user.routing");
var login_signup_component_1 = require("./login-signup/login-signup.component");
var world_component_1 = require("./world/world.component");
var APP_ROUTES = [
    { path: 'login-signup', component: login_signup_component_1.LoginSignupComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'user/:id', component: user_component_1.UserComponent, children: user_routing_1.USER_ROUTES },
    { path: 'user', component: user_component_1.UserComponent, children: user_routing_1.USER_ROUTES },
    { path: 'world/add', component: world_component_1.WorldComponent },
    { path: 'world/edit', component: world_component_1.WorldComponent },
    { path: 'world', component: world_component_1.WorldComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map