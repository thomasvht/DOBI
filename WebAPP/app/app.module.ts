import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { newBikeComponent } from './newBike/newBike.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { MaintenanceComponent} from './maintenance/maintenance.component';
import { addUserComponent } from './addUser/addUser.component';

import { UserService } from './shared/services/user.service';
import { LoggedInGuard } from './shared/login-in.guard';

import { app_routing } from './app.routing';
import { DataService } from './shared/services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, app_routing ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    newBikeComponent,
    IndexComponent,
    DetailComponent,
    MaintenanceComponent,
    addUserComponent
  ],
  providers:    [ DataService, UserService, LoggedInGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }