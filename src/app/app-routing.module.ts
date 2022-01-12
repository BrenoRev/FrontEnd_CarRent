import { GuardiaoGuard } from './service/guardiao.guard';
import { AdministradorComponent } from './components/administrador/administrador.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CarCreateComponent } from './components/car-create/car-create.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'car',
    component: HomeComponent
  },
  {
      path: 'admin', canActivate: [GuardiaoGuard],
      component: AdministradorComponent
  },
  {
    path: 'admin/create', canActivate: [GuardiaoGuard],
    component: CarCreateComponent
  },
  {
    path: 'admin/update/:id', canActivate: [GuardiaoGuard],
    component: CarUpdateComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'car',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
