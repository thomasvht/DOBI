import { LoginComponent } from './login.component';
import { FormsModule } from "@angular/forms";
import { UserService } from '../shared/services/user.service';
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from '@angular/router/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginComponent', ()=> {
  let de: DebugElement;
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpModule ],
      providers: [ UserService ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it("Should exist", () => {
    expect(comp).toBeTruthy();
  });

  it("Should have a function 'login'", () => {
    expect(comp.login).toBeDefined();
  });

  it("Should have property 'email'", () => {
    expect(comp.email).toBeDefined();
  });

  it("Should have property 'email' of type string", () => {
    expect(typeof comp.email).toEqual('string');
  });

  it("Should have property 'password'", () => {
    expect(comp.password).toBeDefined();
  });

  it("Should have property 'password' of type string", () => {
    expect(typeof comp.password).toEqual('string');
  });
});
