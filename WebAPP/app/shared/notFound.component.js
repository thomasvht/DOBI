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
 * Created by Sander Verkaemer on 02/01/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var notFoundComponent = (function () {
    function notFoundComponent(router) {
        this.router = router;
    }
    notFoundComponent.prototype.return = function () {
        this.router.navigate(['/']);
    };
    return notFoundComponent;
}());
notFoundComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'notFound',
        template: "\n        <div class=\"col-lg-12 header-containter full\">\n            <!--<img src=\"../../images/notFound.jpg\" class=\"img-responsive header-img\">-->\n            <div class=\"caption post-content\">\n                <h1 class=\"header-title notFound-text\">Page not found!</h1>\n                <h3 (click)=\"return()\" class=\"notFound-link\">Go back to the homepage</h3>\n            </div>\n        </div>\n"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], notFoundComponent);
exports.notFoundComponent = notFoundComponent;
//# sourceMappingURL=notFound.component.js.map