import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { Model } from '../../model/Model';

@Component({
  selector: 'app-model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.css']
})
export class ModelCreateComponent implements OnInit {

  modelos: Array<Model> = [];
  nameModel!: string;

    constructor(private service: CarService,
                private router: Router,
                private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addModel(){
    this.modelos.push({
      name: this.nameModel
    })
    console.log(this.modelos);
  }
  deletarModelo(name: string){
    if(confirm("Deseja deletar o modelo " + name + "?")){
      const index = this.modelos.findIndex(x => x.name === name);
      this.modelos.splice(index, 1);
      console.log("telefone removido" + name + " index " + index);
    }
  }

  salvarModelo(){
    this.service.saveModel(this.modelos, this.routeActive.snapshot.paramMap.get('brand')!).subscribe(data => {
      this.router.navigate(['admin/']);
    });
  }
}
