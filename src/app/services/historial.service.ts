import { Injectable } from '@angular/core';
import { Historial } from '../interface/historial.interface';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../config/pages.config';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  crear(historial: Historial) {
    return this.http.post<{data: Historial}>(`${URL_API}/historial`, {...historial});
  }
  borrar(dataId) {
    return this.http.delete(`${this.url}/historial/${dataId}`);
  }
}
