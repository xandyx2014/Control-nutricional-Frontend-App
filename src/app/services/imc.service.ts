import { Injectable } from '@angular/core';
import { NutricionMenores, TablaImc, NutricionImc } from '../interface/imc.interface';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  private agnoMeses = 15;
  constructor() { }

  indiceMasaCorporal(talla, peso): NutricionImc {
    // console.log('holaa');
    const imc = this.calculo(talla, peso);
    return this.edadCalculo(imc);
  }
  edadCalculo(imc): NutricionImc {
    if (imc < 16.0) {
      return NutricionImc.DesnutricionSevera;
    }
    if (imc >= 16.0 && imc <= 16.9) {
      return NutricionImc.DesnutricionModerada;
    }
    if (imc >=  17.0 && imc <= 18.4) {
      return NutricionImc.DesnutricionLeve;
    }
    if (imc >= 18.5 && imc <= 24.9) {
      return NutricionImc.Normal;
    }
    if (imc === 25.0) {
      return NutricionImc.Sobrepeso;
    }
    if (imc >= 25.1 && imc <= 26.9) {
      return NutricionImc.SobrepesoI;
    }
    if (imc >= 27.0 && imc <= 29.9) {
      return NutricionImc.SobrepesoII;
    }
    if (imc === 30.0) {
      return NutricionImc.Obesidad;
    }
    if (imc >= 30.1 && imc <= 34.9) {
      return NutricionImc.ObesidadI;
    }
    if (imc >= 35.0 && imc <= 39.9) {
      return NutricionImc.ObesidadII;
    }
    if (imc >= 40.0 && imc <= 49.9) {
      return NutricionImc.ObesidadIII;
    }
    if (imc >= 50.0) {
      return NutricionImc.ObesidadIV;
    }
  }
  calculo(talla, peso) {
    const metro = talla / 100;
    return  this.round( Number(peso) / Math.pow(metro, 2), 1);
  }
  round(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
}
