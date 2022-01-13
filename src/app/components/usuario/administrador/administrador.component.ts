import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Car } from '../../model/Car';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  modalRef?: BsModalRef;

  constructor(private service: CarService,
              private modalService: BsModalService) { }

  cars: Array<Car> = [];
  displayedColumns = ['id', 'name', 'price', 'edit', 'delete'];
  p!: number;
  total!: number;
  idCarDelete!: number;

  ngOnInit(): void {
    this.carregarPagina(1);
  }

  
  openModal(template: TemplateRef<any>, id: number) {
    this.idCarDelete = id;
    this.modalRef = this.modalService.show(template);
  }
  

  carregarPagina(pagina: number) {
    this.service.getCarPageable(pagina - 1, "id").subscribe((data) => {
      this.cars = data.content
      this.total = data.totalElements;
      window.scrollTo(0, 0);
    })
  }

  delete() {
      this.service.deleteCar(this.idCarDelete).subscribe((data) => window.location.reload());
    }
  }
