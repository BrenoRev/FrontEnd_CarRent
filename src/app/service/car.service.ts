import { Car } from '../components/model/Car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../AppConstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getColors():Observable<any>{
    	return this.http.get(AppConstants.baseServidor + "api/v1/enums/colors");
  }

  getFuels():Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/enums/fuels");
  }

  getTransmissions():Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/enums/transmissions");
  }

  getCarTypes():Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/enums/cartypes");
  }

  getBrands() :Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/brand/");
  }

  getModelByBrand(brand: string):Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/model/" + brand);
  }

  getAllModels() : Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/model/");
  }

  getCarById(id: number):Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/car/" + id);
  }
  
  getCars():Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/car/");
  }

  getCarPageable(page: number):Observable<any>{
    return this.http.get(AppConstants.baseServidor + "api/v1/car/pagination/?page=" + page +"&size=30" + "&sort=price,desc");
  }

  saveCar(car: Car){
    return this.http.post(AppConstants.baseServidor + "api/v1/car/", car);
  }

  deleteCar(id: number){
    return this.http.delete(AppConstants.baseServidor + "api/v1/car/" + id);
  }

  updateCar(id: number, car: Car){
    return this.http.put(AppConstants.baseServidor + "api/v1/car/" + id, car);
  }

  patchCar(id: number, car: []){
    return this.http.patch(AppConstants.baseServidor + "api/v1/car/" + id, car);
  }


}

