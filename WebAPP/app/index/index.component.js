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
 * Created by Sander Verkaemer on 08/12/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var IndexComponent = (function () {
    function IndexComponent(router) {
        this.router = router;
    }
    IndexComponent.prototype.dashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    IndexComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'index',
        templateUrl: 'index.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map