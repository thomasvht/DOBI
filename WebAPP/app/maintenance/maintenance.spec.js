"use strict";
var maintenance_component_1 = require("./maintenance.component");
var testing_1 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/services/data.service");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('MaintenanceComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [maintenance_component_1.MaintenanceComponent],
            imports: [testing_1.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [data_service_1.DataService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(maintenance_component_1.MaintenanceComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it("Should exist", function () {
        expect(comp).toBeTruthy();
    });
    it("Should have a function 'addNewMaintenance'", function () {
        expect(comp.addNewMaintenance).toBeDefined();
    });
    it("Should have property 'id'", function () {
        expect(comp.id).toBeDefined();
    });
    it("Should have property 'id' of type string", function () {
        expect(typeof comp.id).toEqual('string');
    });
    it("Should have property 'mechanic'", function () {
        expect(comp.mechanic).toBeDefined();
    });
    it("Should have property 'mechanic' of type string", function () {
        expect(typeof comp.mechanic).toEqual('string');
    });
    it("Should have property 'description'", function () {
        expect(comp.description).toBeDefined();
    });
    it("Should have property 'description' of type string", function () {
        expect(typeof comp.description).toEqual('string');
    });
    it("Should have property 'price'", function () {
        expect(comp.price).toBeDefined();
    });
    it("Should have property 'price' of type number", function () {
        expect(typeof comp.price).toEqual('number');
    });
});
//# sourceMappingURL=maintenance.spec.js.map