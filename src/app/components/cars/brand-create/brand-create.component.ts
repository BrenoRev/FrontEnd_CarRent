import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { Brand } from '../../model/Brand';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  brand: Brand = {
    id: 0,
    name: ''
  }

  constructor(private service: CarService,
              private router: Router) { }

  ngOnInit(): void {
  }

  salvarMarca(){
    this.service.saveBrand(this.brand).subscribe(data => {
      this.router.navigate(['admin/model/' + this.brand.name]);
    });
  }
}
