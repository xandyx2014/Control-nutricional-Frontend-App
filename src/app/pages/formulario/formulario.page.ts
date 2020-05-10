import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HistorialService } from 'src/app/services/historial.service';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  myForm: FormGroup;
  pacienteId: number;
  doctorId: number;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private historialService: HistorialService,
    private notificacionService: NotificacionService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }
  ionViewWillEnter() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    console.log('ente');
    zip(
      this.activatedRoute.queryParams,
      this.authService.userAuth()
    ).subscribe( ([paciente, doctor]) => {
      this.pacienteId = Number(paciente.id);
      this.doctorId = doctor.doctor.id;
      console.log('doctor', this.pacienteId, this.doctorId);
      this.myForm.patchValue({
        doctor_id: this.doctorId,
        paciente_id: this.pacienteId
      });
    });
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      peso: [0, [Validators.required, Validators.min(0)]],
      tamagno: [0, [Validators.required, Validators.min(0)]],
      doctor_id: [0, [Validators.required]],
      paciente_id: [0, [Validators.required]],
      genero: ['', Validators.required],
      edad: ['', [Validators.required]]
    });
  }
  crear() {
    console.log(this.myForm.value);
    this.historialService.crear(this.myForm.value)
      .subscribe(async  (resp)  => {
        console.log(resp);
        await this.notificacionService.presentAlertConfirm({
          header: 'Notificacion',
          message: 'creado exitosamente',
          okCallback: async ()  => {
            await this.irPaciente();
          },
          cancelCallback: async ()  => {
            await this.irPaciente();
          },
        });
    });
  }
  async irPaciente() {
    return this.router.navigate(['/pacientes']);
  }

}
