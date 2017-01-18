import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { HttpModule } from '@angular/http';
import { MyFilterPipe } from './dashboard.pipe';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DashboardComponent', ()=>{
  let de: DebugElement;
  let comp: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, MyFilterPipe ],
      imports: [ RouterTestingModule, FormsModule, HttpModule ],
      providers: [ DataService]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it("Should exist", () =>{
    expect(comp).toBeTruthy();
  });

  it("Should have property 'amountOfBikes'", ()=>{
    expect(comp.amountOfBikes).toBeDefined();
  });

  it("Should have property 'amountOfBikes' of type number", () =>{
    expect(typeof comp.amountOfBikes).toEqual('number');
  });

  it("Should have property 'noUsers'", ()=>{
    expect(comp.noUsers).toBeDefined();
  });

  it("Should have property 'noUsers' of type number", () =>{
    expect(typeof comp.noUsers).toEqual('number');
  });

  it("Should have property 'amountOfInMaintenance'", ()=>{
    expect(comp.amountOfInMaintenance).toBeDefined();
  });

  it("Should have property 'amountOfInMaintenance' of type number", () =>{
    expect(typeof comp.amountOfInMaintenance).toEqual('number');
  });

  it("Should have property 'bikes'", () =>{
    expect(comp.bikes).toBeDefined();
  });
});
