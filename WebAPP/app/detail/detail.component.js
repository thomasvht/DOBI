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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../shared/services/data.service");
var DetailComponent = (function () {
    function DetailComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.dataService.getBikeById(params['id'])
                .subscribe(function (data) {
                if (!data.Number)
                    _this.router.navigate(['/dashboard']);
                _this.number = data.Number;
                _this.location = data.LastLocation;
                _this.url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDIc_mfhGjEsnx-cKk7HglcHFGVCHL1x28&zoom=16&q=" + _this.location;
                if (!data.User) {
                    _this.user = "No user";
                    _this.email = "";
                }
                else {
                    _this.user = data.User.Firstname + " " + data.User.Name;
                    _this.email = data.User.Email;
                }
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
    DetailComponent.prototype.deleteUser = function () {
        var _this = this;
        this.dataService.removeUser(this.id)
            .subscribe(function (data) {
            if (data.message) {
                _this.user = "No user";
                _this.email = "";
            }
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'detail',
        templateUrl: 'detail.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, router_1.ActivatedRoute])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map