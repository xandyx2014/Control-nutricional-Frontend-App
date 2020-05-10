import { Injectable } from '@angular/core';
import { Genero } from '../interface/controlNutricional.interface';
import { CalculoNutricionalService } from './calculo-nutricional.service';
import { zip, Observable, EMPTY, of, from } from 'rxjs';
import { Historial } from '../interface/historial.interface';
import { EdadService } from './edad.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadoCalculoService {

  constructor(
    private calculoNutricionalService: CalculoNutricionalService,
    private edadService: EdadService
  ) { }

  obtenerResultados(historial: Historial): Observable<any> {
    const generoBuscado = historial.genero === 'hombre' ? Genero.Hombre : Genero.Mujer;
    console.log(generoBuscado);
    console.log('[medidadEdad, pesoMedida, pesoEdad]');
    if (this.edadService.controlNutricional(historial.edad)) {
      return zip(
        this.calculoNutricionalService.medidaEdad(historial.edad, generoBuscado),
        this.calculoNutricionalService.pesoMedida(historial.edad, generoBuscado),
        this.calculoNutricionalService.pesoEdad(historial.edad, generoBuscado)
      );
    }
    return from([null]);
  }
}
