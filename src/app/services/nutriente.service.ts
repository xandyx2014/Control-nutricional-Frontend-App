import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../config/pages.config';
import { Nutriente } from '../interface/nutriciente.interface';

@Injectable({
  providedIn: 'root'
})
export class NutrienteService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  actualizarNutriente(valor: Nutriente) {
    return this.http.put(`${this.url}/nutriente/${valor.id}`, {...valor});
  }
  crearNutriente(valor: Nutriente) {
    return this.http.post(`${this.url}/nutriente`, {...valor});
  }
  borrarNutriente(id) {
    return this.http.delete(`${this.url}/nutriente/${id}`);
  }
}
