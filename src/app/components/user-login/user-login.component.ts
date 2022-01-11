import { UserService } from '../../service/user.service';
import { Usuario } from '../model/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  usuario: Usuario = {
    login: '',
    senha: ''
  }

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.usuario);
  }
}
