import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { Historial } from 'src/app/interface/historial.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PacienteService } from 'src/app/services/paciente.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', pointRadius: 7, },
    { data: [60, 50, 90, 82, 72, 58, 50], label: 'Series B', pointRadius: 7, }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: '#92949c',
          },
          ticks: {
            fontColor: '#92949c',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: '#e9a34d',
      borderColor: '#cd8f44',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#92949c',
      pointHoverBackgroundColor: '#92949c',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  private subscription = new Subscription();
  public historial: Historial[] = [];
  private idPaciente: number;
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(
    private activateRoute: ActivatedRoute,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.activateRoute.params
        .pipe(
          switchMap(({ id }) => {
            this.idPaciente = id;
            return this.pacienteService.historial(id);
          })
        )
        .subscribe( resp =>  {
          this.historial = resp;
          this.llenarDatos();
          console.log( this.historial);
        })
    );
  }
  llenarDatos() {
    this.lineChartData = this.lineChartData.map( (data, index) => {
      if (index === 0) {
        return {
          data: this.obtenerValor('peso'),
          label: 'Peso',
          pointRadius: 7
        };
      }
      return {
        data: this.obtenerValor('tamagno'),
        label: 'Tamaño',
        pointRadius: 7
      };
    }) as ChartDataSets[];
    this.lineChartLabels = this.obtenerValor('createdAt').map( value => format(new Date(value), 'MM/dd/yy'));
    console.log(this.lineChartData);
  }
  obtenerValor(property): any[] {
    if (this.historial.length) {
      return this.historial.map( value => value[property]);
    }
    return [];
  }
}
