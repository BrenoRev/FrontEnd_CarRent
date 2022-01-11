import { Brand } from './Brand';
import { Model } from './Model';
export interface Car{
    model : Model;
    brand: Brand;
    name: string;
    ageCar: number;
    km: number;
    price: number;
    ipva: boolean;
    reserved: boolean;
    photo: string;
    carType: string;
    carTransmission: string;
    carColor: string;
    carFuel: string;
}