import { newBikeComponent } from './newBike.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('newBikeComponent', ()=> {
  let de: DebugElement;
  let comp: newBikeComponent;
  let fixture: ComponentFixture<newBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ newBikeComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpModule ],
      providers: [ DataService]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(newBikeComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it("Should exist", () => {
    expect(comp).toBeTruthy();
  });

  it("Should have a function 'addNewBike'", () => {
    expect(comp.addNewBike).toBeDefined();
  });

  it("Should have property 'number'", () => {
    expect(comp.number).toBeDefined();
  });

  it("Should have property 'number' of type number", () => {
    expect(typeof comp.number).toEqual('number');
  });

  it("Should have property 'lockid'", () => {
    expect(comp.lockid).toBeDefined();
  });

  it("Should have property 'lockid' of type string", () => {
    expect(typeof comp.lockid).toEqual('string');
  });

  it("Should have property 'unlockCode'", () => {
    expect(comp.unlockCode).toBeDefined();
  });

  it("Should have property 'unlockCode' of type string", () => {
    expect(typeof comp.unlockCode).toEqual('string');
  });
});
