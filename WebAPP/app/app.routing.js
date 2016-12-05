"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map