"use strict";
var newBike_component_1 = require("./newBike.component");
var testing_1 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/services/data.service");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('newBikeComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [newBike_component_1.newBikeComponent],
            imports: [testing_1.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [data_service_1.DataService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(newBike_component_1.newBikeComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it("Should exist", function () {
        expect(comp).toBeTruthy();
    });
    it("Should have a function 'addNewBike'", function () {
        expect(comp.addNewBike).toBeDefined();
    });
    it("Should have property 'number'", function () {
        expect(comp.number).toBeDefined();
    });
    it("Should have property 'number' of type number", function () {
        expect(typeof comp.number).toEqual('number');
    });
    it("Should have property 'lockid'", function () {
        expect(comp.lockid).toBeDefined();
    });
    it("Should have property 'lockid' of type string", function () {
        expect(typeof comp.lockid).toEqual('string');
    });
    it("Should have property 'unlockCode'", function () {
        expect(comp.unlockCode).toBeDefined();
    });
    it("Should have property 'unlockCode' of type string", function () {
        expect(typeof comp.unlockCode).toEqual('string');
    });
});
//# sourceMappingURL=newBike.component.spec.js.map