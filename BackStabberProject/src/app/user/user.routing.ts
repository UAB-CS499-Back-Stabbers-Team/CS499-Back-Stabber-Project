import { Routes } from "@angular/router";
import {UserAccountEditComponent} from "./user-account/user-account-edit.component";
import {UserProfileEditComponent} from "./user-profile/user-profile-edit.component";
import {UserAccountComponent} from "./user-account/user-account.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const USER_ROUTES: Routes = [
  {path: '', component: UserProfileComponent, pathMatch: 'full'},
  {path: 'account', component: UserAccountComponent},
  {path: 'profile/edit', component: UserProfileEditComponent},
  {path: 'account/edit', component: UserAccountEditComponent},
];
