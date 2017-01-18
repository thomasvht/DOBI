import { addUserComponent } from './addUser.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('addUserComponent', ()=>{
    let de: DebugElement;
    let comp: addUserComponent;
    let fixture: ComponentFixture<addUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ addUserComponent ],
            imports: [ RouterTestingModule, FormsModule, HttpModule ],
            providers: [ DataService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(addUserComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

  it("Should exist", () =>{
      expect(comp).toBeTruthy();
  });

  it("Should have property addUser()", ()=>{
      expect(comp.addUser).toBeTruthy();
  });

  it("Should have property 'email' of type string", () =>{
      expect(typeof comp.email).toEqual('string');
  });

  it("Should have property 'id' of type string", () =>{
    expect(typeof comp.id).toEqual('string');
  });
});
