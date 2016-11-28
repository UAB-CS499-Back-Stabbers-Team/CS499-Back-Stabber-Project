import { Routes, RouterModule } from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {USER_ROUTES} from "./user/user.routing";
import {LoginSignupComponent} from "./login-signup/login-signup.component";
import {WorldComponent} from "./world/world.component";
import {MoralRuleComponent} from "./moral-rule/moral-rule.component";
import {WORLD_ROUTES} from "./world/world.routes";

const APP_ROUTES: Routes = [
  {path: 'login-signup', component: LoginSignupComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: 'user', component: UserComponent, children: USER_ROUTES},
  {path: 'moral-rule', component: MoralRuleComponent, pathMatch: 'full'},
  {path: 'world', component: WorldComponent, children: WORLD_ROUTES},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
