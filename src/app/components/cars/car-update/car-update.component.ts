import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Brand } from '../../model/Brand';
import { Car } from '../../model/Car';
import { Model } from '../../model/Model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

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

  constructor(private service: CarService,
    private routeActive: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

      this.service.getCarById(parseInt(this.routeActive.snapshot.paramMap.get('id')!)).subscribe(data => {
      this.carro = data;
      this.carro.brand = data.brand;
      this.service.getModelByBrand(this.carro.brand.name!).subscribe(data => {
      this.models = data;
        console.log(this.carro.model);
      });
    });

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

  updateCar() {
    this.service.updateCar(parseInt(this.routeActive.snapshot.paramMap.get('id')!), this.carro).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carro atualizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.router.navigateByUrl('/admin');
      }, 1500);
    });
  }


  getModels() {
    this.service.getModelByBrand(this.carro.brand.name!).subscribe(data => {

      this.models = data;
    });
  }
}
