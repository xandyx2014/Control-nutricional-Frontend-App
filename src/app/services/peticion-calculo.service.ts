import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genero } from '../interface/controlNutricional.interface';

@Injectable({
  providedIn: 'root'
})
export class PeticionCalculoService {

  constructor(
    private http: HttpClient
  ) { }
  peticion(asset, url) {
    return this.http.get(`${asset}/${url}`);
  }
}
