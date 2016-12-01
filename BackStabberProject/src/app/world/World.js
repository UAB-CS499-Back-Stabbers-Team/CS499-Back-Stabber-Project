/**
 * Created by cwcordell on 10/24/16.
 */
"use strict";
var World = (function () {
    function World(id, name, prologue, image, stories) {
        this.id = id;
        this.name = name;
        this.prologue = prologue;
        this.imageURL = image;
        this.stories = stories;
    }
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.js.map