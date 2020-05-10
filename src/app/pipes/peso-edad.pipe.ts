import { Pipe, PipeTransform } from '@angular/core';
import { Historial } from '../interface/historial.interface';
import { PesoEdad } from '../interface/controlNutricional.interface';
import { EstadoNutricion } from '../interface/user.interface';

@Pipe({
  name: 'calculoPesoEdad'
})
export class PesoEdadPipe implements PipeTransform {

  transform(historial: Historial, pesoEdad: PesoEdad): EstadoNutricion {
    const peso = Number(historial.peso);
    if ( peso <= Number(pesoEdad['-3'])) {
      return EstadoNutricion.grave;
    }
    if (peso >= Number(pesoEdad['-2']) && peso <= Number(pesoEdad['-1'])) {
      return EstadoNutricion.leve;
    }
    if (peso >= Number(pesoEdad['-1']) && peso <= Number(pesoEdad['1'])) {
      return EstadoNutricion.moderada;
    }
    if (peso >= Number(pesoEdad['2']) && peso <= Number(pesoEdad['3'])) {
      return EstadoNutricion.normal;
    }
    if (peso === Number(pesoEdad.Mediana)) {
      return EstadoNutricion.mediana;
    }
    if( peso >= Number(pesoEdad['3'])) {
      return EstadoNutricion.sobrePeso;
    }
  }

}
