import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  online(){
    if(localStorage.getItem('token') != null){
      return true;
    }else{
      return false;
    }
  }
  deslogar(){
    localStorage.clear();
    this.router.navigateByUrl('car')
  }
}
