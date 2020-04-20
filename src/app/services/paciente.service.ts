import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API } from '../config/pages.config';
import { Historial } from '../interface/historial.interface';
import { Usuario } from '../interface/user.interface';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  crearPaciente(usuario: Usuario) {
    return this.http.post<{ data: Usuario}>(`${this.url}/usuario/store`, {...usuario});
  }
  historial(id) {
    return this.http.get<Historial[]>(`${this.url}/paciente/${id}/historial`);
  }
  mostrarTodos( q: string = '') {
    const params = new HttpParams({
      fromObject: {
        q
      }
    });

   //  headers.append(q, q);
    return this.http.get<{ data: Usuario[]}>(`${this.url}/paciente` , { params }).pipe(
      debounceTime(500)
    );
  }
}
