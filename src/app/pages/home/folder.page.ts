import { Component, OnInit } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';
import { PacienteService } from 'src/app/services/paciente.service';
import { Historial } from 'src/app/interface/historial.interface';
import { format, formatISO } from 'date-fns';
import { AuthService } from 'src/app/services/auth.service';
import { HistorialService } from 'src/app/services/historial.service';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private subscription = new Subscription();
  public historial: Historial[] = [];
  private idPaciente: number;
  ok = true;
  constructor(
    private menuCtrl: MenuController,
    private activateRoute: ActivatedRoute,
    public authService: AuthService,
    private pacienteService: PacienteService,
    private historialService: HistorialService,
    private notificacionService: NotificacionService,
    private router: Router,
    private actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    this.authService.isDoctor();
    console.log(await this.menuCtrl.isOpen());
  }
  async ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }
  async ionViewWillEnter() {
    this.obtenerValor();
  }
  obtenerValor() {
    this.ok = false;
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.ok = false;
          this.idPaciente = id;
          return this.pacienteService.historial(id);
        }),
        take(1)
      )
      .subscribe(resp => {
        this.ok = true;
        this.historial = resp;
        // console.log(resp);
      });
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  async presentActionSheet(item: Historial) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Ver calculo',
          icon: 'share',
          handler: () => {
            this.irCalculo(item);
          }
        },
        {
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            this.historialService.borrar(item.id).pipe(
              take(1)
            ).subscribe(() => {
              this.notificacionService.presentToast('Se ha borrado el producto');
              this.obtenerValor();
            });
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }
  fecha(date: string) {
    const formatDate = formatISO(new Date(date), { representation: 'date' });
    // console.log();
    console.log(formatDate);
    return formatDate;
  }
  irCalculo(item: Historial) {
    this.router.navigate(['/calculo'], { queryParams: { ...item, Doctor: null } });
  }
  verPagina() {
    this.router.navigate(['/grafico', this.idPaciente]);
  }

}
