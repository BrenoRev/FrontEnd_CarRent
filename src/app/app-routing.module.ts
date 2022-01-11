import { GuardiaoGuard } from './service/guardiao.guard';
import { AdministradorComponent } from './components/administrador/administrador.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

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
    path: 'login',
    component: UserLoginComponent
  },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
