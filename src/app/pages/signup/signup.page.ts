import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/services/paciente.service';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private notificacionService: NotificacionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      ci: ['', Validators.required],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
      tipo: ['paciente']
    });
  }
  crear() {
    // console.log(this.myForm.value);
    this.pacienteService.crearPaciente(this.myForm.value).subscribe( (resp) => {
        console.log( resp );
        this.router.navigate(['/pacientes']);
        this.notificacionService.presentToast('Usuario Creado Exitosamente');
    });
  }
}
