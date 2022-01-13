import { Brand } from './Brand';
import { Model } from './Model';
export interface Car{
    id?: number;
    model : Model;
    brand: Brand;
    name: string;
    ageCar: number | undefined;
    km: number | undefined;
    price: number | undefined;
    ipva: boolean;
    reserved: boolean;
    photo: string;
    carType: string;
    carTransmission: string;
    carColor: string;
    carFuel: string;
}