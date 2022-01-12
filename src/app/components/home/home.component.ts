import { CarService } from '../../service/car.service';
import { Car } from '../model/Car';
import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _albums: Array<any> = []; 

  cars!: Array<Car>;
  p!: number;
  total!: number;

  constructor(private service: CarService,
              private _lightbox: Lightbox) { 
              }

  ngOnInit(): void {
    this.carregarPagina(1);
  }

  carregarPagina(pagina: number) {
    this.service.getCarPageable(pagina - 1).subscribe((data) => {
      this.cars = data.content
      this.total = data.totalElements;
      window.scrollTo(0, 0);
    })
  }

  // lightbox

  open(image: string, name: string): void { 
    const src = image;
    const caption = name; 
    const thumb = image; 
    const album = { src: src, caption: caption, thumb: thumb }; 
    this._albums.push(album); 
    this._lightbox.open(this._albums); 
    this._albums = [];
    } 

  close(): void {
    this._lightbox.close(); 
  }

}
