import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { HttpModule } from '@angular/http';
import { UserService } from '../shared/services/user.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('RegisterComponent', ()=> {
  let de: DebugElement;
  let comp: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpModule ],
      providers: [ DataService, UserService]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it("Should exist", () => {
    expect(comp).toBeTruthy();
  });

  it("Should have a function 'register'", () => {
    expect(comp.register).toBeDefined();
  });

  it("Should have a function 'checkPasswords'", () => {
    expect(comp.checkPasswords).toBeDefined();
  });

  it("function 'checkPasswords' should return true if passwords are the same", () => {
    let password1 = "azerty", password2 = "azerty";
    expect(comp.checkPasswords(password1,password2)).toBeTruthy();
  });

  it("function 'checkPasswords' should return false if passwords are not the same", () => {
    let password1 = "azerty", password2 = "qwerty";
    expect(comp.checkPasswords(password1,password2)).toBeFalsy();
  });

  it("Should have property 'firstname'", () => {
    expect(comp.firstname).toBeDefined();
  });

  it("Should have property 'firstname' of type string", () => {
    expect(typeof comp.firstname).toEqual('string');
  });

  it("Should have property 'name'", () => {
    expect(comp.name).toBeDefined();
  });

  it("Should have property 'name' of type string", () => {
    expect(typeof comp.name).toEqual('string');
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

  it("Should have property 'passwordRepeat'", () => {
    expect(comp.passwordRepeat).toBeDefined();
  });

  it("Should have property 'passwordRepeat' of type string", () => {
    expect(typeof comp.passwordRepeat).toEqual('string');
  });
});
