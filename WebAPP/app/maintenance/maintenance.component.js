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
var data_service_1 = require("../shared/services/data.service");
var router_1 = require("@angular/router");
var MaintenanceComponent = (function () {
    function MaintenanceComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
    }
    MaintenanceComponent.prototype.addNewMaintenance = function () {
        var _this = this;
        if (this.mechanic && this.description && this.price) {
            this.route.params.subscribe(function (params) { _this.id = params['id']; });
            var maintenance = {
                BikeId: this.id,
                Mechanic: this.mechanic,
                Description: this.description,
                Price: this.price
            };
            this.dataService.addNewMaintenance(maintenance)
                .subscribe(function (result) {
                if (result) {
                    if (result.error) {
                        _this.errorMessage = result.error;
                    }
                    else {
                        _this.router.navigate(['/detail/' + _this.id]);
                    }
                }
            });
        }
        else {
            this.errorMessage = "All fields are required";
        }
    };
    return MaintenanceComponent;
}());
MaintenanceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maintenance',
        templateUrl: 'maintenance.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, router_1.ActivatedRoute])
], MaintenanceComponent);
exports.MaintenanceComponent = MaintenanceComponent;
//# sourceMappingURL=maintenance.component.js.map