import { Injectable } from '@angular/core';
import { differenceInMonths } from 'date-fns';
type Edad =  Date | string | number;
@Injectable({
  providedIn: 'root'
})
export class EdadService {
  private edadMaximaControlNutricional = 60;
  constructor() { }

  edadMeses(edad: Edad): Edad {
    const edadNacimiento = new Date(2014, 6, 21);
    return differenceInMonths(new Date(), new Date(edad));
  }
  controlNutricional(edad: Edad): boolean {
    const edadTotal =  this.edadMeses(edad) as number;
    return edadTotal < this.edadMaximaControlNutricional;
  }
}
