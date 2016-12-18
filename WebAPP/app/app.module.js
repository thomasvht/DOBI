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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var header_component_1 = require("./shared/header.component");
var footer_component_1 = require("./shared/footer.component");
var newBike_component_1 = require("./newBike/newBike.component");
var index_component_1 = require("./index/index.component");
var detail_component_1 = require("./detail/detail.component");
var maintenance_component_1 = require("./maintenance/maintenance.component");
var addUser_component_1 = require("./addUser/addUser.component");
var user_service_1 = require("./shared/services/user.service");
var login_in_guard_1 = require("./shared/login-in.guard");
var app_routing_1 = require("./app.routing");
var data_service_1 = require("./shared/services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.app_routing],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            newBike_component_1.newBikeComponent,
            index_component_1.IndexComponent,
            detail_component_1.DetailComponent,
            maintenance_component_1.MaintenanceComponent,
            addUser_component_1.addUserComponent
        ],
        providers: [data_service_1.DataService, user_service_1.UserService, login_in_guard_1.LoggedInGuard],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map