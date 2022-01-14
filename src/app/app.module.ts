import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserLoginComponent } from './components/usuario/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorComponent } from './components/usuario/administrador/administrador.component';
import { MatTableModule } from '@angular/material/table';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component'
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { CarCreateComponent } from './components/cars/car-create/car-create.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LightboxModule } from 'ngx-lightbox';
import { BrandCreateComponent } from './components/cars/brand-create/brand-create.component';
import { ModelCreateComponent } from './components/cars/model-create/model-create.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatSelectModule } from '@angular/material/select';
import Swal from 'sweetalert2';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserLoginComponent,
    AdministradorComponent,
    CarUpdateComponent,
    CarCreateComponent,
    BrandCreateComponent,
    ModelCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxPaginationModule,
    MatSidenavModule,
    FlexLayoutModule,
    LightboxModule,
    ModalModule.forRoot(),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
