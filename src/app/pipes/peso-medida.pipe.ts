import { Pipe, PipeTransform } from '@angular/core';
import { Historial } from '../interface/historial.interface';
import { PesoMedida } from '../interface/controlNutricional.interface';
import { EstadoNutricion } from '../interface/user.interface';

@Pipe({
  name: 'calculoPesoMedida'
})
export class PesoMedidaPipe implements PipeTransform {

  transform(historial: Historial, pesoMedida: PesoMedida): EstadoNutricion {
    const peso = Number(historial.peso);
    if ( peso <= Number(pesoMedida['-3'])) {
      return EstadoNutricion.grave;
    }
    if (peso >= Number(pesoMedida['-2']) && peso <= Number(pesoMedida['-1'])) {
      return EstadoNutricion.leve;
    }
    if (peso >= Number(pesoMedida['-1']) && peso <= Number(pesoMedida['1'])) {
      return EstadoNutricion.moderada;
    }
    if (peso >= Number(pesoMedida['2']) && peso <= Number(pesoMedida['3'])) {
      return EstadoNutricion.normal;
    }
    if (peso === Number(pesoMedida.Mediana)) {
      return EstadoNutricion.mediana;
    }
    if( peso >= Number(pesoMedida['3'])) {
      return EstadoNutricion.sobrePeso;
    }
  }

}
