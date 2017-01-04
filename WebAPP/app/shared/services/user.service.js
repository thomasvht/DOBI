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
var http_1 = require("@angular/http");
var UserService = (function () {
    //private url:string = "http://localhost:5000";
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.url = "http://146.185.162.171:5000";
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + '/login', user, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.error) {
                _this.loggedIn = false;
            }
            else {
                console.log(res);
                localStorage.setItem('auth_token', JSON.stringify({ token: res.token, email: res.user.Email }));
                _this.loggedIn = true;
            }
            return res;
        });
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + '/register', user, headers)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.error) {
                _this.loggedIn = false;
            }
            else {
                localStorage.setItem('auth_token', JSON.stringify({ token: res.token, email: res.user.Email }));
                _this.loggedIn = true;
            }
            return res;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map