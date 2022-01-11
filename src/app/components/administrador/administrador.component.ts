import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Car } from '../model/Car';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  constructor(private service: CarService) { }

  cars: Array<Car> = [];
  displayedColumns = ['id','name','price','edit','delete'];

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.service.getCars().subscribe(data => {
      this.cars = data;
    });
  }

  delete(id: number){
    if(confirm ("Deseja realmente excluir o usuário?")){
    this.service.deleteCar(id).subscribe((data) => (data));
  }
  }
}
