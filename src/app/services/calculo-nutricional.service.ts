import { Injectable } from '@angular/core';
import { EdadService } from './edad.service';
import { TipoCalculo, Genero, MedicionHombre, MedicionMujer } from '../interface/controlNutricional.interface';
import { PeticionCalculoService } from './peticion-calculo.service';

@Injectable({
  providedIn: 'root'
})
export class CalculoNutricionalService {
  private edadTallaMaxima = 60;
  private edadTallaMinima = 24;
  constructor(
    private edadService: EdadService,
    private peticionCalculoService: PeticionCalculoService
  ) { }


  private tipoCalculo(edad): TipoCalculo {
    const edadMeses = this.edadService.edadMeses(edad) as number;
    if (edadMeses <= this.edadTallaMaxima && edadMeses >= this.edadTallaMinima) {
      return TipoCalculo.talla;
    }
    return TipoCalculo.longitud;
  }
  medidaEdad(edad, genero: Genero) {
    // Si es hombre
    console.log('medida edad', genero);
    if (genero === Genero.Hombre) {
      return this.calculoPorEdad(edad, MedicionHombre.asset, MedicionHombre.talla_edad_2_5, MedicionHombre.longitud_edad_0_2 );
    }
    // Si es Mujer
    return this.calculoPorEdad(edad, MedicionMujer.asset, MedicionMujer.talla_edad_2_5, MedicionMujer.longitud_edad_0_2 );
  }
  pesoMedida(edad, genero: Genero) {
    console.log('peso medida', genero);
    if (genero === Genero.Hombre) {
      return this.calculoPorEdad(edad, MedicionHombre.asset, MedicionHombre.peso_talla_2_5, MedicionHombre.peso_longitud_0_2 );
    }
    // Si es Mujer
    return this.calculoPorEdad(edad, MedicionMujer.asset, MedicionMujer.peso_talla_2_5, MedicionMujer.peso_longitud_0_2 );
  }
  pesoEdad(edad, genero: Genero) {
    console.log('peso edad', genero);
    if (genero === Genero.Hombre) {
      return this.peticionCalculoService.peticion(MedicionHombre.asset, MedicionHombre.peso_edad_0_5);
    }
    // Si es Mujer
    return this.peticionCalculoService.peticion(MedicionMujer.asset, MedicionMujer.peso_edad_0_5);
  }
  private calculoPorEdad(edad, asset, urlTalla, urlLongitud) {
    if (this.tipoCalculo(edad) === TipoCalculo.talla) {
      console.log('talla', this.edadService.edadMeses(edad));
      return this.peticionCalculoService.peticion(asset, urlTalla);
    }
    console.log('longitud', this.edadService.edadMeses(edad));
    return this.peticionCalculoService.peticion(asset, urlLongitud);
  }
}
