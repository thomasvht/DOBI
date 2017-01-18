import { MaintenanceComponent } from './maintenance.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('MaintenanceComponent', ()=> {
  let de: DebugElement;
  let comp: MaintenanceComponent;
  let fixture: ComponentFixture<MaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpModule ],
      providers: [ DataService]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it("Should exist", () => {
    expect(comp).toBeTruthy();
  });

  it("Should have a function 'addNewMaintenance'", () => {
    expect(comp.addNewMaintenance).toBeDefined();
  });

  it("Should have property 'id'", () => {
    expect(comp.id).toBeDefined();
  });

  it("Should have property 'id' of type string", () => {
    expect(typeof comp.id).toEqual('string');
  });

  it("Should have property 'mechanic'", () => {
    expect(comp.mechanic).toBeDefined();
  });

  it("Should have property 'mechanic' of type string", () => {
    expect(typeof comp.mechanic).toEqual('string');
  });

  it("Should have property 'description'", () => {
    expect(comp.description).toBeDefined();
  });

  it("Should have property 'description' of type string", () => {
    expect(typeof comp.description).toEqual('string');
  });

  it("Should have property 'price'", () => {
    expect(comp.price).toBeDefined();
  });

  it("Should have property 'price' of type number", () => {
    expect(typeof comp.price).toEqual('number');
  });
});
