import { Injectable } from '@angular/core';
import { URL_API } from '../config/pages.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PapService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener(pacienteId) {
    return this.http.get<[]>(`${this.url}/paciente/${pacienteId}/pap`);
  }
  crear(data, pacienteId) {
    return this.http.post(`${this.url}/paciente/${pacienteId}/pap`, {...data});
  }
  borrar(dataId) {
    return this.http.delete(`${this.url}/paciente/pap/${dataId}`);
  }
}
