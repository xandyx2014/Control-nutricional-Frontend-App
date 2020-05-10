import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { FormComponent } from './form/form.component';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { Antecedente } from 'src/app/interface/antecedente.interface';
import { FactorRiesgoService } from 'src/app/services/factor-riesgo.service';

@Component({
  selector: 'app-alergia',
  templateUrl: './factor-riesgo.page.html',
  styleUrls: ['./factor-riesgo.scss'],
})
export class FactorRiesgoPage implements OnInit {
  miArray = [0 , 1 , 2 , 3 , 4 , 5 , 6];
  datas: any[] = [];
  idPaciente;
  constructor(
    private factorRiesgoService: FactorRiesgoService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private notificacionService: NotificacionService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => {
        this.idPaciente = id;
        return this.factorRiesgoService.obtener(id);
      })
    ).subscribe( resp => {
      console.log(resp);
      this.datas = resp;
    });
  }
  obtenerDatos() {
    this.factorRiesgoService.obtener(this.idPaciente).subscribe( (resp) => {
      this.datas = resp;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FormComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        paciente_id: this.idPaciente
      }
    });
    modal.onDidDismiss().then( () => {
      this.obtenerDatos();
    });
    return await modal.present();
  }
  async presentActionSheet(data: Antecedente) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Accion',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.factorRiesgoService.borrar(data.id).subscribe( resp => {
            this.obtenerDatos();
            this.notificacionService.presentToast('Borrado correctamente');
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
}
