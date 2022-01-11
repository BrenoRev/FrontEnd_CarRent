import { Usuario } from '../components/model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../AppConstants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private router: Router) { }

  login(usuario: any) {
    this.http.post<any>(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]

      // Salvando a token recebida da api no localstorage
      localStorage.setItem("token", token)

      this.router.navigate(['/admin'])
    }, error => {
      alert("Acesso negado, credenciais não foram aceitas")
    })
  }


  register(user: Usuario) {
    return this.http.post(AppConstants.baseRegister, user);
  }

  userAutenticado() {
    if (localStorage.getItem("token") != null && localStorage.getItem("token") != undefined) {
      return true;
    } else {
      return false;
    }
  }

}
