import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [
        {
          text: 'Historial del control',
          icon: 'clipboard',
          handler: () => {
            this.router.navigate(['home']);
          }
        },
        {
          text: 'Ver informacion',
          icon: 'person-circle',
          handler: () => {
            this.router.navigate(['usuario']);
          }
        },
        {
          text: 'Agregar Historial',
          icon: 'barbell',
          handler: () => {
            this.router.navigate(['formulario']);
          }
        }, {
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
