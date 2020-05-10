import { Injectable } from '@angular/core';
import { URL_API } from '../config/pages.config';
import { HttpClient } from '@angular/common/http';
import { Antecedente } from '../interface/antecedente.interface';

@Injectable({
  providedIn: 'root'
})
export class AntecedenteService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener(pacienteId) {
    return this.http.get<[]>(`${this.url}/paciente/${pacienteId}/antecedente`);
  }
  crear(data: Antecedente, pacienteId) {
    return this.http.post(`${this.url}/paciente/${pacienteId}/antecedente`, {...data});
  }
  borrar(dataId) {
    return this.http.delete(`${this.url}/paciente/antecedente/${dataId}`);
  }
}
