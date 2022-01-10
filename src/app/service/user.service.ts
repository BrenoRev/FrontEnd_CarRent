import { Usuario } from './../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../AppConstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: Usuario){
    return this.http.post(AppConstants.baseLogin, user);
  }

  register(user: Usuario){
    return this.http.post(AppConstants.baseRegister, user);
  }
}
