
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path: 'car',
    component: HomeComponent
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
