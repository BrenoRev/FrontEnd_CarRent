import { CarService } from '../../service/car.service';
import { Car } from '../model/Car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars!: Array<Car>;

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.service.getCars().subscribe(data => {
      console.log(data)
      this.cars = data;
    });
  }

  alerta() {
    alert('Alerta');
  }
}
