import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { MedicamentoEnfermedadService } from 'src/app/services/medicamento-enfermedad.service';
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
    private medicamentoEnfermedad: MedicamentoEnfermedadService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      inicio: ['', Validators.required],
      clasificacion: ['', Validators.required],
      final: ['', Validators.required],
      paciente_id: [this.navParams.get('paciente_id')],
    });
  }
  crear() {
    this.medicamentoEnfermedad.crear({
      ...this.myForm.value,
    }, this.myForm.value.paciente_id).subscribe( resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
