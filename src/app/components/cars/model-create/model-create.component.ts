import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CarService } from 'src/app/service/car.service';
import Swal from 'sweetalert2';
import { Model } from '../../model/Model';

@Component({
  selector: 'app-model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.css']
})
export class ModelCreateComponent implements OnInit {

  modelos: Array<Model> = [];
  nameModel!: string;
  modalRef?: BsModalRef;
  modelDelete!: string;
  allModels: Array<Model> = [];

    constructor(private service: CarService,
                private router: Router,
                private routeActive: ActivatedRoute,
                private modalService: BsModalService) { }

openModal(template: TemplateRef<any>, model: string) {
  this.modelDelete = model;
  this.modalRef = this.modalService.show(template);
}          

  ngOnInit(): void {
    this.service.getAllModels().subscribe(data => {
      this.allModels = data;
    });
  }

  addModel(){

    if(this.modelos.findIndex(x => x.name === this.nameModel) === -1 && this.allModels.findIndex(x => x.name === this.nameModel) === -1){
      this.modelos.push({
        name: this.nameModel
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Já existe um modelo com esse nome!",
      });
      setTimeout(() => {
        this.nameModel = '';
      }, 500);
    }
  }
  
  deletarModelo(){
      const index = this.modelos.findIndex(x => x.name === this.modelDelete);
      this.modelos.splice(index, 1);
      this.modalService.hide(1);
      this.modalService._hideModal();
  }

  salvarModelo(){
    this.service.saveModel(this.modelos, this.routeActive.snapshot.paramMap.get('brand')!).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Marca e modelos adicionados com sucesso',
        showConfirmButton: true,
        timer: 3000
      });
      setTimeout(() => {
        this.router.navigateByUrl('/admin');
      }, 3000);
    });
  }
}
