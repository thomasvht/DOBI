"use strict";
var login_component_1 = require("./login.component");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../shared/services/user.service");
var http_1 = require("@angular/http");
var testing_1 = require("@angular/router/testing");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('LoginComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent],
            imports: [testing_1.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [user_service_1.UserService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(login_component_1.LoginComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it("Should exist", function () {
        expect(comp).toBeTruthy();
    });
    it("Should have a function 'login'", function () {
        expect(comp.login).toBeDefined();
    });
    it("Should have property 'email'", function () {
        expect(comp.email).toBeDefined();
    });
    it("Should have property 'email' of type string", function () {
        expect(typeof comp.email).toEqual('string');
    });
    it("Should have property 'password'", function () {
        expect(comp.password).toBeDefined();
    });
    it("Should have property 'password' of type string", function () {
        expect(typeof comp.password).toEqual('string');
    });
});
//# sourceMappingURL=login.component.spec.js.map