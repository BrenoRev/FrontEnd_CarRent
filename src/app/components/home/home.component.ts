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
  p!: number;
  total!: number;

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.carregarPagina(1);
  }

  carregarPagina(pagina: number) {
    console.log(pagina);
    this.service.getCarPageable(pagina - 1).subscribe((data) => {
      this.cars = data.content
      this.total = data.totalElements;
      window.scrollTo(0, 0);
    })
  }

  alerta() {
    alert("Carro reservado com sucesso!");
  }
}
