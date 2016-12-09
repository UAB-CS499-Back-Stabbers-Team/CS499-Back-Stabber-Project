/**
 * Created by cwcordell on 10/24/16.
 */
"use strict";
var Story = (function () {
    function Story(id, worldId, title, pro, choice1Text, choice1Rule, choice2Text, choice2Rule) {
        this.id = id;
        this.worldId = worldId;
        this.title = title;
        this.prologue = pro;
        this.choice1Text = choice1Text;
        this.choice1Rule = choice1Rule;
        this.choice2Text = choice2Text;
        this.choice2Rule = choice2Rule;
    }
    return Story;
}());
exports.Story = Story;
//# sourceMappingURL=Story.js.map