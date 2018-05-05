import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../dialog.service';
import { VeiculoService } from '../../services/veiculo.service';
import { Router } from '@angular/router';
import { ResponseApi } from '../../model/reponse-api';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  page:number = 0;
  count:number = 3;
  pages:Array<number>;
  message: {}
  classCss: {}
  listVeiculos= []


  constructor(
    private dialogService: DialogService,
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAll(this.page, this.count);
  }


  findAll(page:number, count:number){
    this.veiculoService.findAll(page, count).subscribe((responseApi: ResponseApi) => {
      this.listVeiculos = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err =>   {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      })
    }
   )
  }

  edit(id: string){
    this.router.navigate(['/veiculo-novo', id]);
  }

  delete(id: string){
    this.dialogService.confirm('Você deseja remover esse veículo ?')
    .then((canDelete: boolean) =>{
      if(canDelete){
        this.message = {};
        this.veiculoService.remove(id).subscribe((responseApi: ResponseApi) =>{
          this.showMessage({
            type: 'success',
            text: 'Registro Removido'
          });
          this.findAll(this.page, this.count);
        },err=> {
          this.showMessage({
            type: 'error',
            text: err['error']['errors'][0]
          });
        })
      }
    });
  }


  setNextPage(event: any){
    event.preventDefault();
    if(this.page +1 < this.pages.length){
      this.page = this.page + 1;
      this.findAll(this.page, this.count);
    }
  }

  setPreviousPage(event: any){
    event.preventDefault();
    if(this.page > 0){
      this.page = this.page - 1;
      this.findAll(this.page, this.count);
    }
  }

  setPage(index, event: any){
    event.preventDefault();
      this.page = index;
      this.findAll(this.page, this.count);
  }


 private showMessage(message: {type: string, text: string}) : void{
  
  this.message = message;
  this.buildClasses(message.type);
  setTimeout(() => {
    this.message = undefined;
  }, 3000);
 }


 private buildClasses(type: string): void{
   this.classCss={
     'alert' : true
   }
   this.classCss['alert-'+type] = true;
 }

}
