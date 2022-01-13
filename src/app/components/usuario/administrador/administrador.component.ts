import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Car } from '../../model/Car';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  constructor(private service: CarService) { }

  cars: Array<Car> = [];
  displayedColumns = ['id', 'name', 'price', 'edit', 'delete'];
  p!: number;
  total!: number;

  ngOnInit(): void {
    this.carregarPagina(1);
  }

  carregarPagina(pagina: number) {
    this.service.getCarPageable(pagina - 1,"id").subscribe((data) => {
      console.log(data);
      this.cars = data.content
      this.total = data.totalElements;
      window.scrollTo(0, 0);
    })
  }


  delete(id: number) {
    if (confirm("Deseja realmente excluir o usuário?")) {
      this.service.deleteCar(id).subscribe((data) => window.location.reload());
    }
  }
}
