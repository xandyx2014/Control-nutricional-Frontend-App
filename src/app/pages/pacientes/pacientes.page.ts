import { Component, OnInit } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';
import { Usuario } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
  pacientes: Usuario[] = [];
  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
    private menuCtrl: MenuController,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.pacienteService.mostrarTodos().subscribe( (resp) => {
      this.pacientes = resp.data;
      console.log(this.pacientes);
    });
  }
  async presentActionSheet(paciente: Usuario) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass: 'action-sheet-custom',
      buttons: [
        {
          text: 'Historial del control',
          icon: 'clipboard',
          handler: () => {
            this.router.navigate(['home', paciente.Paciente.id]);
          }
        },
        {
          text: 'Ver informacion',
          icon: 'person-circle',
          handler: () => {
            this.router.navigate(['usuario'], { queryParams: {...paciente}});
          }
        },
        {
          text: 'Agregar Historial',
          icon: 'barbell',
          handler: () => {
            this.router.navigate(['formulario'], { queryParams: {...paciente.Paciente}});
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }
  buscar(event) {
    const q = event.target.value;
    this.pacienteService.mostrarTodos(q).subscribe( (resp) => {
      this.pacientes = resp.data;
      // console.log(this.pacientes);
    });
  }

}
