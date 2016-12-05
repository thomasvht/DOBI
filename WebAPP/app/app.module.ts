import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BikesComponent } from './bikes/bikes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { app_routing } from './app.routing';
import { DataService } from './shared/services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, app_routing ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BikesComponent,
    LoginComponent,
    RegisterComponent ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }