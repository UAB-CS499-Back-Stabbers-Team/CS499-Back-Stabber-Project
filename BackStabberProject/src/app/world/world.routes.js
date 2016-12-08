"use strict";
var world_list_component_1 = require("./world-list/world-list.component");
var world_detail_component_1 = require("./world-detail/world-detail.component");
var world_edit_component_1 = require("./world-edit/world-edit.component");
var story_component_1 = require("./story/story.component");
exports.WORLD_ROUTES = [
    { path: 'new', component: world_edit_component_1.WorldEditComponent, pathMatch: 'full' },
    { path: ':id', component: world_detail_component_1.WorldDetailComponent },
    { path: ':id/edit', component: world_edit_component_1.WorldEditComponent },
    { path: ':worldIndex/new', component: story_component_1.StoryComponent },
    { path: ':worldIndex/:storyIndex', component: story_component_1.StoryComponent },
    // {path: ':worldIndex/:worldIndex/:storyId', component: StoryComponent},
    { path: '', component: world_list_component_1.WorldListComponent, pathMatch: 'full' }
];
//# sourceMappingURL=world.routes.js.map