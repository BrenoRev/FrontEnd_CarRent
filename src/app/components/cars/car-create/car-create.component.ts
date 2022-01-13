import { Router } from '@angular/router';
import { CarService } from '../../../service/car.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Car } from '../../model/Car';
import { Model } from '../../model/Model';
import { Brand } from '../../model/Brand';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  color!: string
  brands: Array<Brand> = [];
  models: Array<Model> = [];
  carColors: Array<String> = [];
  carTypes: Array<String> = []
  carTransmissions: Array<String> = []
  carFuels: Array<String> = []

  carro: Car = {
    model: {
      id: 0
    },
    brand: {
      id: 0,
    },
    name: '',
    ageCar: undefined,
    km: undefined,
    price: undefined,
    ipva: false,
    reserved: false,
    photo: '',
    carType: '',
    carTransmission: '',
    carColor: '',
    carFuel: ''
  };
  sendBrand!: string;
  constructor(private service: CarService,
              private router: Router) { }

  ngOnInit(): void {

    this.service.getBrands().subscribe(data => {
      this.brands = data;
    });

    this.service.getColors().subscribe(data => {
      this.carColors = data;
    });

    this.service.getFuels().subscribe(data => {
      this.carFuels = data;
    });

    this.service.getCarTypes().subscribe((data: String[]) => {
      this.carTypes = data;
    });

    this.service.getTransmissions().subscribe(data => {
      this.carTransmissions = data;
    });

  }

  salvarCarro() {
    this.service.saveCar(this.carro).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carro adicionado ao catálogo com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.router.navigateByUrl('/admin');
      }, 1500);
    });
    this.novo()
  }

  getModels() {
    this.service.getModelByBrand(this.carro.brand.name!).subscribe(data => {

      this.models = data;
    });
  }

  novo() {
    this.carro.model = {},
      this.carro.brand = {},
      this.carro.name = '',
      this.carro.ageCar = 0,
      this.carro.km = 0,
      this.carro.price = 0,
      this.carro.ipva = false,
      this.carro.reserved = false,
      this.carro.photo = '',
      this.carro.carType = '',
      this.carro.carTransmission = '',
      this.carro.carColor = '',
      this.carro.carFuel = ''
  }


}
