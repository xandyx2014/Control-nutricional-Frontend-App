import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../config/pages.config';

@Injectable({
  providedIn: 'root'
})
export class FactorRiesgoSocialService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener(pacienteId) {
    return this.http.get<[]>(`${this.url}/paciente/${pacienteId}/factorRiesgoSocial`);
  }
  crear(data, pacienteId) {
    return this.http.post(`${this.url}/paciente/${pacienteId}/factorRiesgoSocial`, {...data});
  }
  borrar(dataId) {
    return this.http.delete(`${this.url}/paciente/factorRiesgoSocial/${dataId}`);
  }
}
