import { GuardiaoGuard } from './service/guardiao.guard';
import { AdministradorComponent } from './components/usuario/administrador/administrador.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/usuario/user-login/user-login.component';
import { CarCreateComponent } from './components/cars/car-create/car-create.component';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component';
import { BrandCreateComponent } from './components/cars/brand-create/brand-create.component';
import { ModelCreateComponent } from './components/cars/model-create/model-create.component';

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
    path: 'admin/brand', canActivate: [GuardiaoGuard],
    component: BrandCreateComponent
  },
  {
    path: 'admin/model/:brand', canActivate: [GuardiaoGuard],
    component: ModelCreateComponent
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
