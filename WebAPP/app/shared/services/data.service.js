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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Rx_1 = require('rxjs/Rx');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getBikesByOwner = function () {
        return this.http.get('http://localhost:5000/api/bike/byOwner/' + ReadUserFromLocalStorage(), GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addNewBike = function (number, lockid, unlockCode) {
        var body = {
            "Number": number,
            "LockId": lockid,
            "Owner": ReadUserFromLocalStorage(),
            "UnlockCode": unlockCode
        };
        return this.http.post('http://localhost:5000/api/bike/add/', body, GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getBikeById = function (id) {
        return this.http.get('http://localhost:5000/api/bike/single/' + id, GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addNewMaintenance = function (maintenance) {
        return this.http.post('http://localhost:5000/api/maintenance/add/', maintenance, GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getMaintenances = function (id) {
        return this.http.get('http://localhost:5000/api/maintenance/' + id, GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.toggleMaintenance = function (id) {
        return this.http.post('http://localhost:5000/api/bike/toggleInMaintenance/' + id, null, GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addUser = function (id, email) {
        var body = {
            "Email": email,
            "BikeId": id
        };
        return this.http.post('http://localhost:5000/api/bike/addUser', body, GenerateHeaders())
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
function GenerateHeaders() {
    var currentUser = JSON.parse(localStorage.getItem('auth_token'));
    var token = currentUser.token;
    var email = currentUser.email;
    var headers = new http_1.Headers({
        'Content-Type': 'application/json',
        'x-access-token': token,
        'x-key': email
    });
    return new http_1.RequestOptions({ headers: headers });
}
function ReadUserFromLocalStorage() {
    var currentUser = JSON.parse(localStorage.getItem('auth_token'));
    return currentUser.email;
}
//# sourceMappingURL=data.service.js.map