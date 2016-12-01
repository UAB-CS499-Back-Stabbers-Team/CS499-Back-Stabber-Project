/**
 * Created by cwcordell on 10/24/16.
 */
"use strict";
var Story = (function () {
    function Story(id, worldId, title, pro, choices) {
        this.id = id;
        this.worldId = worldId;
        this.title = title;
        this.prologue = pro;
        this.choices = choices;
    }
    return Story;
}());
exports.Story = Story;
//# sourceMappingURL=Story.js.map