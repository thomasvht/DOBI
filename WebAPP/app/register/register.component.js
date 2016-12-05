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
var core_1 = require('@angular/core');
var data_service_1 = require('../shared/services/data.service');
var RegisterComponent = (function () {
    function RegisterComponent(dataService) {
        this.dataService = dataService;
    }
    RegisterComponent.prototype.register = function () {
        if (this.password != this.passwordRepeat) {
            this.warningMessage = "Passwords are not the same!";
        }
        else {
            var user = {
                firstname: this.firstname,
                name: this.name,
                email: this.email,
                password: this.password,
            };
            this.dataService.register(user);
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map