import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { format } from 'date-fns';
import { EmbarazoService } from 'src/app/services/embarazo.service';
import { IdentificacionService } from 'src/app/services/identificacion.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private navParams: NavParams,
    private identificacionService: IdentificacionService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      nombrePadre: ['', Validators.required],
      nombreMadre: ['', Validators.required],
      fechaNacimientoPadre: ['', Validators.required],
      fechaNacimientoMadre: ['', Validators.required],
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      nohc: ['', Validators.required],
      noley: ['', Validators.required],
      grupoSanguineo: ['', Validators.required],
      factorRh: ['', Validators.required],
      paciente_id: [this.navParams.get('paciente_id')],
    });
  }
  crear() {
    this.identificacionService.crear({
      ...this.myForm.value,
    }, this.myForm.value.paciente_id).subscribe( resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
