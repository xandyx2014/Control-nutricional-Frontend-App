import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutricional',
  templateUrl: './nutricional.page.html',
  styleUrls: ['./nutricional.page.scss'],
})
export class NutricionalPage implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  // /calculo-nutricional
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass: 'action-sheet-custom',
      buttons: [
        {
          text: 'Ver calendario',
          icon: 'calendar',
          handler: () => {
            console.log('Share clicked');
            this.router.navigate(['/calculo-nutricional']);
          }
        },
        {
          text: 'Marcar como completo',
          icon: 'checkmark',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Marcar como  incompleto',
          icon: 'close',
          handler: () => {
            console.log('Play clicked');
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
}
