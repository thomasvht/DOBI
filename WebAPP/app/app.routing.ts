import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { newBikeComponent } from './newBike/newBike.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { addUserComponent } from './addUser/addUser.component';
import { notFoundComponent } from './shared/notFound.component';

import { LoggedInGuard } from './shared/login-in.guard';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard]},
  { path: 'newBike', component: newBikeComponent, canActivate: [LoggedInGuard]},
  { path: 'detail/:id', component: DetailComponent, canActivate: [LoggedInGuard]},
  { path: 'maintenance/:id', component: MaintenanceComponent, canActivate: [LoggedInGuard]},
  { path: 'addUser/:id', component: addUserComponent, canActivate: [LoggedInGuard]},

  { component: notFoundComponent, path: "**" }

];

export const app_routing = RouterModule.forRoot(app_routes);