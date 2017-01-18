"use strict";
var register_component_1 = require("./register.component");
var testing_1 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/services/data.service");
var http_1 = require("@angular/http");
var user_service_1 = require("../shared/services/user.service");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('RegisterComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [register_component_1.RegisterComponent],
            imports: [testing_1.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [data_service_1.DataService, user_service_1.UserService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(register_component_1.RegisterComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it("Should exist", function () {
        expect(comp).toBeTruthy();
    });
    it("Should have a function 'register'", function () {
        expect(comp.register).toBeDefined();
    });
    it("Should have a function 'checkPasswords'", function () {
        expect(comp.checkPasswords).toBeDefined();
    });
    it("function 'checkPasswords' should return true if passwords are the same", function () {
        var password1 = "azerty", password2 = "azerty";
        expect(comp.checkPasswords(password1, password2)).toBeTruthy();
    });
    it("function 'checkPasswords' should return false if passwords are not the same", function () {
        var password1 = "azerty", password2 = "qwerty";
        expect(comp.checkPasswords(password1, password2)).toBeFalsy();
    });
    it("Should have property 'firstname'", function () {
        expect(comp.firstname).toBeDefined();
    });
    it("Should have property 'firstname' of type string", function () {
        expect(typeof comp.firstname).toEqual('string');
    });
    it("Should have property 'name'", function () {
        expect(comp.name).toBeDefined();
    });
    it("Should have property 'name' of type string", function () {
        expect(typeof comp.name).toEqual('string');
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
    it("Should have property 'passwordRepeat'", function () {
        expect(comp.passwordRepeat).toBeDefined();
    });
    it("Should have property 'passwordRepeat' of type string", function () {
        expect(typeof comp.passwordRepeat).toEqual('string');
    });
});
//# sourceMappingURL=register.component.spec.js.map