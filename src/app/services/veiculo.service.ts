import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from '../model/veiculo.model';
import { LOCADORA_VEICULO_API } from './locadora.api';


@Injectable()
export class VeiculoService {

  constructor(private http: HttpClient) { }


  createOrUpdate(veiculo: Veiculo){
    if(veiculo.id != null && veiculo.id != ''){
      return this.http.put(`${LOCADORA_VEICULO_API}/api/veiculos`, veiculo);
    }else{
      veiculo.id = null;
      return this.http.post(`${LOCADORA_VEICULO_API}/api/veiculos`, veiculo);
    }

  }


  findAll(page:number, count:number){
    return this.http.get(`${LOCADORA_VEICULO_API}/api/veiculos?pag=${page}&size=${count}`);
  }


  findById(id:string){
    return this.http.get(`${LOCADORA_VEICULO_API}/api/veiculos/${id}`);
  }

  remove(id:string){
    return this.http.delete(`${LOCADORA_VEICULO_API}/api/veiculos/${id}`);
  }

}
