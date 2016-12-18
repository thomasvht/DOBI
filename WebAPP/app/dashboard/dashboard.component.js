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
var router_1 = require("@angular/router");
var data_service_1 = require("../shared/services/data.service");
var DashboardComponent = (function () {
    function DashboardComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.bikes = [];
        this.noUsers = 0;
        this.amountOfInMaintenance = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getBikesByOwner()
            .subscribe(function (data) {
            _this.bikes = data;
            _this.amountOfBikes = _this.bikes.length;
            for (var i = 0; i < _this.bikes.length; i++) {
                if (!_this.bikes[i].User) {
                    _this.noUsers++;
                }
                if (_this.bikes[i].inMaintenance == true) {
                    _this.amountOfInMaintenance++;
                }
            }
        });
    };
    DashboardComponent.prototype.getDetail = function (id) {
        this.router.navigate(['/detail/' + id]);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        templateUrl: 'dashboard.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map