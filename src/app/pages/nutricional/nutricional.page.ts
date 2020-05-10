import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';
import { switchMap } from 'rxjs/operators';
import { Nutriente } from 'src/app/interface/nutriciente.interface';
import { NutrienteService } from 'src/app/services/nutriente.service';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-nutricional',
  templateUrl: './nutricional.page.html',
  styleUrls: ['./nutricional.page.scss'],
})
export class NutricionalPage implements OnInit {
  nutrientes: Nutriente[];
  // paciente_id
  idUsuario;
  constructor(
    private actionSheetController: ActionSheetController,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
    private nutrienteService: NutrienteService,
    private notificacionService: NotificacionService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(' control nutricional ');
    this.activateRoute.params.pipe(
      switchMap( ({id}) => {
        this.idUsuario = id;
        return this.pacienteService.obtenerNutriente(id);
      })
    ).subscribe( ( nutrientes ) => {
      console.log(nutrientes);
      this.nutrientes = nutrientes;
    });
    // his.pacienteService.obtenerNutriente();
  }
  obtenerNutriente() {
    return this.pacienteService.obtenerNutriente(this.idUsuario);
  }
  irPageCalendario(nutricion: Nutriente) {
    this.router.navigate(['/calculo-nutricional'], { queryParams: {...nutricion}});
  }
  // /calculo-nutricional
  async presentActionSheet(nutricion: Nutriente) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass: 'action-sheet-custom',
      buttons: [
        {
          text: 'Ver calendario',
          icon: 'calendar',
          handler: () => {
            console.log('Share clicked');
            this.irPageCalendario(nutricion);
          }
        },
        {
          text: 'Marcar como completo',
          icon: 'checkmark',
          handler: () => {
            console.log('Share clicked');
            this.actualizarNutriente({ id: nutricion.id, estado: true});
          }
        },
        {
          text: 'Marcar como  incompleto',
          icon: 'close',
          handler: () => {
            console.log('Play clicked');
            this.actualizarNutriente({ id: nutricion.id, estado: false});
          }
        },
        {
          text: 'Borrar',
          icon: 'trash',
          handler: () => {
            console.log('Share clicked');
            this.borrarNutriente(nutricion.id);
            this.notificacionService.presentToast('Borrado Correctamente');
          }
        },
        {
          text: 'Cancel',
          icon: 'exit',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }
  actualizarNutriente(nutricion: Nutriente) {
    this.nutrienteService.actualizarNutriente({
      id: nutricion.id,
      estado: nutricion.estado
    }).pipe(
      switchMap( () => this.obtenerNutriente())
    ).subscribe( resp => {
      this.nutrientes = resp;
    });
  }
  borrarNutriente(id) {
    this.nutrienteService.borrarNutriente(id).pipe(
      switchMap( () => this.obtenerNutriente())
    ).subscribe( resp => {
      this.nutrientes = resp;
    });
  }
  async presentModal(nutriente: Nutriente) {
    const modal = await this.modalController.create({
      component: FormularioComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        paciente_id: this.idUsuario
      }
    });
    modal.onDidDismiss().then( ({data}) => {
      /* this.obtenerNutriente().subscribe( resp => {
        this.nutrientes = resp;
      }); */
      const resp = typeof data === 'undefined' ? false : data;
      if (resp.ok) {
        this.obtenerNutriente().subscribe( (nutri: any) => {
          this.nutrientes = nutri;
        });
      }
    });
    return await modal.present();
  }
}
