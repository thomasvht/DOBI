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
 * Created by Sander Verkaemer on 09/12/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../shared/services/data.service');
var DetailComponent = (function () {
    function DetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.dataService.getBikeById(params['id'])
                .subscribe(function (data) {
                _this.number = data.Number;
                _this.user = data.User.firstname + " " + data.User.name;
                _this.email = data.User.email;
                _this.inMaintenance = data.inMaintenance;
            });
            _this.dataService.getMaintenances(params['id'])
                .subscribe(function (data) {
                _this.maintenances = data;
            });
        });
    };
    DetailComponent.prototype.toggleMaintenance = function () {
        this.dataService.toggleMaintenance(this.id)
            .subscribe(function (data) {
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: 'detail.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.ActivatedRoute])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map