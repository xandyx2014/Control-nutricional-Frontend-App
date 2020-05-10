import { Component, OnInit } from '@angular/core';
import { AlergiaService } from 'src/app/services/alergia.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Alergia } from 'src/app/interface/alergia.interface';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { FormComponent } from './form/form.component';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-alergia',
  templateUrl: './alergia.page.html',
  styleUrls: ['./alergia.page.scss'],
})
export class AlergiaPage implements OnInit {
  miArray = [0 , 1 , 2 , 3 , 4 , 5 , 6];
  alergias: Alergia[] = [];
  idPaciente;
  constructor(
    private alergiaService: AlergiaService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private notificacionService: NotificacionService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => {
        this.idPaciente = id;
        return this.alergiaService.obtener(id);
      })
    ).subscribe( resp => {
      console.log(resp);
      this.alergias = resp;
    });
  }
  obtenerDatos() {
    this.alergiaService.obtener(this.idPaciente).subscribe( (resp) => {
      this.alergias = resp;
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
  async presentActionSheet(alergia: Alergia) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Accion',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.alergiaService.borrar(alergia.id).subscribe( resp => {
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
