import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
interface presentAlertData {
  header: string;
  message: string;
  okCallback?: () => void;
  cancelCallback?: () => void;
}
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) { }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  async presentAlertConfirm(data: presentAlertData) {
    const alert = await this.alertController.create({
      header: data.header,
      message: data.message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data.cancelCallback
        }, {
          text: 'Okay',
          handler: data.okCallback
        }
      ]
    });

    await alert.present();
  }
}
