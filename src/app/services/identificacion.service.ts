import { Injectable } from '@angular/core';
import { URL_API } from '../config/pages.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdentificacionService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener(pacienteId) {
    return this.http.get<[]>(`${this.url}/paciente/${pacienteId}/identificacion`);
  }
  crear(data, pacienteId) {
    return this.http.post(`${this.url}/paciente/${pacienteId}/identificacion`, {...data});
  }
  borrar(dataId) {
    return this.http.delete(`${this.url}/paciente/identificacion/${dataId}`);
  }
}
