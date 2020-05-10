import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { PapService } from 'src/app/services/pap.service';
import { RiesgoService } from 'src/app/services/riesgo.service';
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
    private riesgoService: RiesgoService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      tipo: ['', Validators.required],
      personal: ['', Validators.required],
      familiar: ['', Validators.required],
      paciente_id: [this.navParams.get('paciente_id')],
    });
  }
  crear() {
    this.riesgoService.crear({
      ...this.myForm.value,
    }, this.myForm.value.paciente_id).subscribe( resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
