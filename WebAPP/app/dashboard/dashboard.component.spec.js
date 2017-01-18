"use strict";
var dashboard_component_1 = require("./dashboard.component");
var testing_1 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/services/data.service");
var http_1 = require("@angular/http");
var dashboard_pipe_1 = require("./dashboard.pipe");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('DashboardComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [dashboard_component_1.DashboardComponent, dashboard_pipe_1.MyFilterPipe],
            imports: [testing_1.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [data_service_1.DataService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(dashboard_component_1.DashboardComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it("Should exist", function () {
        expect(comp).toBeTruthy();
    });
    it("Should have property 'amountOfBikes'", function () {
        expect(comp.amountOfBikes).toBeDefined();
    });
    it("Should have property 'amountOfBikes' of type number", function () {
        expect(typeof comp.amountOfBikes).toEqual('number');
    });
    it("Should have property 'noUsers'", function () {
        expect(comp.noUsers).toBeDefined();
    });
    it("Should have property 'noUsers' of type number", function () {
        expect(typeof comp.noUsers).toEqual('number');
    });
    it("Should have property 'amountOfInMaintenance'", function () {
        expect(comp.amountOfInMaintenance).toBeDefined();
    });
    it("Should have property 'amountOfInMaintenance' of type number", function () {
        expect(typeof comp.amountOfInMaintenance).toEqual('number');
    });
    it("Should have property 'bikes'", function () {
        expect(comp.bikes).toBeDefined();
    });
});
//# sourceMappingURL=dashboard.component.spec.js.map