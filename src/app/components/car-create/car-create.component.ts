import { CarService } from './../../service/car.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Car } from '../model/Car';
import { Model } from '../model/Model';
import { Brand } from '../model/Brand';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  model: Model = {
    name: '',
    id: 0
  };

  brand: Brand = {
    id : 0,
    
  }

  color!: string
  brands : Array<Brand> = [];
  models : Array<Model> = [];
  carColors: Array<String> = [];
  carTypes: Array<String> = []
  carTransmissions: Array<String> = []
  carFuels: Array<String> = []

  carro : Car = {
    model: this.model,
    brand: this.brand,
    name: '',
    ageCar: 0,
    km: 0,
    price: 0,
    ipva: false,
    reserved: false,
    photo: '',
    carType: '',
    carTransmission: '',
    carColor: '',
    carFuel: ''
  };
  sendBrand!: string;
  constructor(private service: CarService) { }

  ngOnInit(): void {

    this.service.getBrands().subscribe(data => {
      console.log(data)
      this.brands = data;
    });

    this.service.getColors().subscribe(data => {
      console.log(data)
      this.carColors = data;
    });

    this.service.getFuels().subscribe(data => {
      console.log(data)
      this.carFuels = data;
    });

    this.service.getCarTypes().subscribe((data: String[]) => {
      console.log(data)
      this.carTypes = data;
    });

    this.service.getTransmissions().subscribe(data => {
      console.log(data)
      this.carTransmissions = data;
    });

  }

  salvarCarro(){
    this.service.saveCar(this.carro).subscribe(data => {
      console.log(data)
    });
  }

  getModels(){
    console.log("fez")
    this.service.getModelByBrand(this.carro.brand.name!).subscribe(data => {
      console.log(data)
      this.models = data;
    });
  }
  
  novo(){
    this.carro.model = {},
    this.carro.brand = {},
    this.carro.name= '',
    this.carro.ageCar= 0,
    this.carro.km= 0,
    this.carro.price=0,
    this.carro.ipva= false,
    this.carro.reserved= false,
    this.carro.photo= '',
    this.carro.carType= '',
    this.carro.carTransmission= '',
    this.carro.carColor= '',
    this.carro.carFuel= ''
  }

 
}
