import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { AlergiaService } from 'src/app/services/alergia.service';

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
    private alergiaService: AlergiaService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      paciente_id: [this.navParams.get('paciente_id')],
    });
  }
  crear() {
    this.alergiaService.crear(this.myForm.value, this.myForm.value.paciente_id).subscribe( resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
