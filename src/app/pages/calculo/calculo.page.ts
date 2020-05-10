import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historial } from 'src/app/interface/historial.interface';
import { MedidaEdad, PesoMedida, PesoEdad } from 'src/app/interface/controlNutricional.interface';
import { Subscription } from 'rxjs';
import { ResultadoCalculoService } from 'src/app/services/resultado-calculo.service';
import { switchMap, tap } from 'rxjs/operators';
import { EdadService } from 'src/app/services/edad.service';
import { EstadoNutricion, EstadoMedida } from 'src/app/interface/user.interface';
import { ImcService } from 'src/app/services/imc.service';
import { NutricionImc } from 'src/app/interface/imc.interface';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {
  private subscription = new Subscription();
  public historialPaciente: Historial;
  public medidaEdad: MedidaEdad;
  public pesoMedida: PesoMedida;
  public pesoEdad: PesoEdad;
  public imcShow = false;
  imc: number;
  nutricionImc: NutricionImc;
  public ok = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private resultadoCalculoService: ResultadoCalculoService,
    private edadService: EdadService,
    private imcService: ImcService
  ) { }

  ngOnInit() {
    this.subscription.add(
    this.activatedRoute.queryParams.pipe(
      tap( (historial: Historial) => this.historialPaciente = historial),
      switchMap( (resp: Historial) =>  this.resultadoCalculoService.obtenerResultados(resp))
    ).subscribe( (dataresp) => {
        console.log(this.historialPaciente);
        const meses = this.edadService.edadMeses(this.historialPaciente.edad);
        if (dataresp) {
          const medidadEdad =  dataresp[0];
          const pesoMedida = dataresp[1];
          const pesoEdad = dataresp[2];
          console.log('Historial paciente', this.historialPaciente);
          this.medidaEdad =  this.obtenerMedidaEdad(medidadEdad, meses);
          this.pesoMedida = this.obtenerpesoMedida(pesoMedida, this.historialPaciente.tamagno);
          this.pesoEdad = this.obtenerPesoEdad(pesoEdad, meses);
          this.ok = true;
          console.log('Medidad Edad', this.medidaEdad);
          console.log('Peso medida', this.pesoMedida);
          console.log('Peso edad', this.pesoEdad);
        } else {
          console.log('soy mayor de edad');
          const tamagno =  this.historialPaciente.tamagno;
          const peso = this.historialPaciente.peso;
          this.nutricionImc = this.imcService.indiceMasaCorporal( tamagno , peso);
          this.imc = this.imcService.calculo(tamagno, peso);
          this.imcShow = true;
          // console.log(imc);
        }
        // console.log('1')
    }));
  }
  obtenerMedidaEdad(medidaEdad: MedidaEdad[], mes: Date | string | number) {
    const edadMeses = mes.toString();
    return medidaEdad.filter(value => value.Meses === edadMeses)[0];
  }
  obtenerpesoMedida(pesoMedida: PesoMedida[], tamagno: Date | string | number) {
    const cm = tamagno.toString();
    return pesoMedida.filter(value => Number(value.cm) === Number(cm))[0];
  }
  obtenerPesoEdad(medidaEdad: PesoEdad[], mes: Date | string | number) {
    const edadMeses = mes.toString();
    return medidaEdad.filter(value => value.Meses === edadMeses)[0];
  }
  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }
  edadMeses(edad) {
    return this.edadService.edadMeses(edad);
  }

}
