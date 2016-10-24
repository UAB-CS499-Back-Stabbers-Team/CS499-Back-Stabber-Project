"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StoryComponent = (function () {
    function StoryComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.dberror = '';
    }
    StoryComponent.prototype.ngOnInit = function () {
        //   this.myForm = new FormGroup(
        //     {
        //       mono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(516)]),
        //       choice1: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]),
        //       choice2: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(128)])
        //     }
        //   );
        //   this.story = this.myForm.controls['mono'];
        //   this.choice1 = this.myForm.controls['choice1'];
        //   this.choice2 = this.myForm.controls['choice2'];
    };
    StoryComponent = __decorate([
        core_1.Component({
            selector: 'bsp-world',
            templateUrl: './story.component.html',
            styleUrls: ['./story.component.css']
        })
    ], StoryComponent);
    return StoryComponent;
}());
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map