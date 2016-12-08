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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        console.log("Login!");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://127.0.0.1:5000/login', user, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log(res);
            if (res.error) {
                _this.loggedIn = false;
            }
            else {
                localStorage.setItem('auth_token', JSON.stringify({ token: res.token, email: res.user.email }));
                _this.loggedIn = true;
            }
            return res.success;
        });
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://127.0.0.1:5000/register', user, headers)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log(res);
            if (res.error) {
                _this.loggedIn = false;
            }
            else {
                localStorage.setItem('auth_token', JSON.stringify({ token: res.token, email: res.user.email }));
                _this.loggedIn = true;
            }
            return res.success;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map