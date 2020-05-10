import { Injectable } from '@angular/core';
import { URL_API } from '../config/pages.config';
import { HttpClient } from '@angular/common/http';
import { Alergia } from '../interface/alergia.interface';

@Injectable({
  providedIn: 'root'
})
export class AlergiaService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener(pacienteId) {
    return this.http.get<Alergia[]>(`${this.url}/paciente/${pacienteId}/alergia`);
  }
  crear(alergia: Alergia, pacienteId) {
    return this.http.post(`${this.url}/paciente/${pacienteId}/alergia`, {...alergia});
  }
  borrar(alergiaId) {
    return this.http.delete(`${this.url}/paciente/alergia/${alergiaId}`);
  }
}
