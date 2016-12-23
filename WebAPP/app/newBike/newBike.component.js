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
 * Created by Sander Verkaemer on 01/12/2016.
 */
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/services/data.service");
var router_1 = require("@angular/router");
var newBikeComponent = (function () {
    function newBikeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    newBikeComponent.prototype.addNewBike = function () {
        var _this = this;
        if (this.number && this.lockid && this.unlockCode) {
            this.dataService.addNewBike(this.number, this.lockid, this.unlockCode)
                .subscribe(function (result) {
                if (result) {
                    if (result.error) {
                        _this.errorMessage = result.error;
                    }
                    else {
                        _this.router.navigate(['/dashboard']);
                    }
                }
            });
        }
        else {
            this.errorMessage = "All fields are required";
        }
    };
    return newBikeComponent;
}());
newBikeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newbike',
        templateUrl: 'newBike.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
], newBikeComponent);
exports.newBikeComponent = newBikeComponent;
//# sourceMappingURL=newBike.component.js.map