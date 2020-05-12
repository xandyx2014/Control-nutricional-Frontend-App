import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
interface PresentAlertData {
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
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  async presentAlertConfirm(data: PresentAlertData) {
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
    return loading;
    // console.log('Loading dismissed!');
  }
}
