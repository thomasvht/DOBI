"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Sander Verkaemer on 07/12/2016.
 */
var core_1 = require('@angular/core');
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'DashboardFooter',
            template: "\n        <footer>\n            <div class=\"navbar navbar-fixed-bottom\">\n                <div class=\"navbar-inner footer\">\n                    <div class=\"container\">\n                        <footer>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    Created by <a href=\"http://twitter.com/DanWahlin\" target=\"_blank\">@DanWahlin</a>\n                                </div>\n                            </div>\n                        </footer>\n                    </div>\n                </div>\n            </div>\n        </footer>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map