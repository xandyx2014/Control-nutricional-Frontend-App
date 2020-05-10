import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { PacienteService } from 'src/app/services/paciente.service';
import { Historial } from 'src/app/interface/historial.interface';
import { format, formatISO } from 'date-fns';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private subscription = new Subscription();
  public historial: Historial[] = [];
  private idPaciente: number;
  constructor(
    private menuCtrl: MenuController,
    private activateRoute: ActivatedRoute,
    public authService: AuthService,
    private pacienteService: PacienteService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.authService.isDoctor();
    console.log(await this.menuCtrl.isOpen());
  }
  async ionViewDidEnter() {
      this.menuCtrl.enable(true);
  }
  async ionViewWillEnter() {
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
          // console.log(resp);
        })
    );
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  fecha(date: string) {
    const formatDate = formatISO(new Date(date), { representation: 'date' });
    // console.log();
    console.log(formatDate);
    return formatDate;
  }
  irCalculo(item: Historial) {
    this.router.navigate(['/calculo'], { queryParams: {...item, Doctor: null}});
  }
  verPagina() {
    this.router.navigate(['/grafico', this.idPaciente]);
  }

}
