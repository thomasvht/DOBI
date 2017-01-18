"use strict";
var addUser_component_1 = require("./addUser.component");
var testing_1 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/services/data.service");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('addUserComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [addUser_component_1.addUserComponent],
            imports: [testing_1.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [data_service_1.DataService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(addUser_component_1.addUserComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it("Should exist", function () {
        expect(comp).toBeTruthy();
    });
    it("Should have property addUser()", function () {
        expect(comp.addUser).toBeTruthy();
    });
    it("Should have property 'email' of type string", function () {
        expect(typeof comp.email).toEqual('string');
    });
    it("Should have property 'id' of type string", function () {
        expect(typeof comp.id).toEqual('string');
    });
});
//# sourceMappingURL=addUser.component.spec.js.map