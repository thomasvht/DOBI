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
 * Created by Sander Verkaemer on 21/12/2016.
 */
var core_1 = require("@angular/core");
var MyFilterPipe = (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, arg) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        //return items.filter(item => item.title.indexOf(args[0].title) !== -1);
        return items.filter(function (item) {
            if (!item.User && arg === "")
                return true;
            if (!item.User && arg !== "")
                return false;
            return item.User.Email.indexOf(arg) !== -1;
        });
    };
    return MyFilterPipe;
}());
MyFilterPipe = __decorate([
    core_1.Pipe({
        name: 'myfilter',
        pure: false
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MyFilterPipe);
exports.MyFilterPipe = MyFilterPipe;
//# sourceMappingURL=dashboard.pipe.js.map