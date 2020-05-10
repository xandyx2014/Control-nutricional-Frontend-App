import { Pipe, PipeTransform } from '@angular/core';
import { Historial } from '../interface/historial.interface';
import { MedidaEdad } from '../interface/controlNutricional.interface';
import { EstadoMedida } from '../interface/user.interface';

@Pipe({
  name: 'calculoMedidaEdad'
})
export class MedidaEdadPipe implements PipeTransform {

  transform(historial: Historial, medidaEdad: MedidaEdad): any {
    const edad = historial.tamagno;
    console.log(edad);
    if (Number(edad) < Number(medidaEdad['-3'])) {
      console.log('grave');
      return EstadoMedida.grave;
    }
    if (Number(edad) >= Number(medidaEdad['-3']) && Number(edad) <= Number(medidaEdad['-2'])) {
      console.log('media');
      return EstadoMedida.media;
    }
    if (Number(edad) >= Number(medidaEdad['-1'])) {
      console.log('normal');
      return EstadoMedida.normal;
    }
  }
}
