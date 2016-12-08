/**
 * Created by cwcordell on 11/25/16.
 */
import { Routes } from "@angular/router";
import { WorldListComponent } from "./world-list/world-list.component";
import { WorldDetailComponent } from "./world-detail/world-detail.component";
import { WorldEditComponent } from "./world-edit/world-edit.component";
import { StoryComponent } from "./story/story.component";


export const WORLD_ROUTES: Routes = [
  {path: 'new', component: WorldEditComponent, pathMatch: 'full'},
  {path: ':id', component: WorldDetailComponent},
  {path: ':id/edit', component: WorldEditComponent},
  {path: ':worldIndex/new', component: StoryComponent},
  {path: ':worldIndex/:storyIndex', component: StoryComponent},
  // {path: ':worldIndex/:worldIndex/:storyId', component: StoryComponent},
  {path: '', component: WorldListComponent, pathMatch: 'full'}
];

