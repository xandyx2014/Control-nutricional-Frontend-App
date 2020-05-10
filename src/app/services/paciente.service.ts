import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API } from '../config/pages.config';
import { Historial } from '../interface/historial.interface';
import { Usuario } from '../interface/user.interface';
import { debounceTime } from 'rxjs/operators';
import { Nutriente } from '../interface/nutriciente.interface';

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
    this.http.get('assets/data/hombre/longitud_edad_0_2agno.json').subscribe( resp => {
      console.log(resp);
    });
   //  headers.append(q, q);
    return this.http.get<{ data: Usuario[]}>(`${this.url}/paciente` , { params }).pipe(
      debounceTime(500)
    );
  }
  obtenerNutriente(idPaciente: string | number) {
    return this.http.get<Nutriente[]>(`${this.url}/paciente/${idPaciente}/nutriente`);
  }
}
