"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var newBike_component_1 = require("./newBike/newBike.component");
var index_component_1 = require("./index/index.component");
var detail_component_1 = require("./detail/detail.component");
var maintenance_component_1 = require("./maintenance/maintenance.component");
var addUser_component_1 = require("./addUser/addUser.component");
var login_in_guard_1 = require("./shared/login-in.guard");
var app_routes = [
    { path: '', pathMatch: 'full', component: index_component_1.IndexComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [login_in_guard_1.LoggedInGuard] },
    { path: 'newBike', component: newBike_component_1.newBikeComponent, canActivate: [login_in_guard_1.LoggedInGuard] },
    { path: 'detail/:id', component: detail_component_1.DetailComponent, canActivate: [login_in_guard_1.LoggedInGuard] },
    { path: 'maintenance/:id', component: maintenance_component_1.MaintenanceComponent, canActivate: [login_in_guard_1.LoggedInGuard] },
    { path: 'addUser/:id', component: addUser_component_1.addUserComponent, canActivate: [login_in_guard_1.LoggedInGuard] }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map