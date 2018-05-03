import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Veiculo } from '../../model/veiculo.model';
import { ResponseApi } from './../../model/reponse-api';
import { VeiculoService } from '../../services/veiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-new',
  templateUrl: './veiculo-new.component.html',
  styleUrls: ['./veiculo-new.component.css']
})
export class VeiculoNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  veiculo = new Veiculo('','','',0,'');
  message: {};
  classCss: {};

  constructor(
   private veiculoService: VeiculoService,
   private router: ActivatedRoute
  ) { }

  ngOnInit() {
    let id:string = this.router.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }
  }


  findById(id:string){
    this.veiculoService.findById(id).subscribe((responseApi: ResponseApi) =>{
      this.veiculo = responseApi.data;
  }, err =>{
    this.showMessage({
      type: 'error',
      text: err['error']['errors'][0]
    });
  }); 
  }


  salvar(){
    this.message={};
    this.veiculoService.createOrUpdate(this.veiculo).subscribe((responseApi: ResponseApi) =>{
      this.veiculo = new Veiculo('','','',0,'');
      let veiculoRet: Veiculo = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text:  `Veículo ${veiculoRet.modelo} cadastrado com sucesso`
      });
    }, err=>{
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
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

getFromGroupClass(isInvalid:boolean, isDirty):{}{
  return{
    'form-group' : true,
    'has-error': isInvalid && isDirty,
    'has-success': !isInvalid && isDirty
  };
}


}
