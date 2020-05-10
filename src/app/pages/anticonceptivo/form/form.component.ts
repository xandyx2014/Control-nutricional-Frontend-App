import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { format } from 'date-fns';
import { AnticonceptivoService } from 'src/app/services/anticonceptivo.service';
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
    private anticonceptivoService: AnticonceptivoService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      inicio: ['', Validators.required],
      metodo: ['', Validators.required],
      paciente_id: [this.navParams.get('paciente_id')],
    });
  }
  crear() {
    const inicio = format(new Date(this.myForm.value.inicio), 'dd-MM-yyyy');
    console.log(inicio);
    this.anticonceptivoService.crear({...this.myForm.value, inicio}, this.myForm.value.paciente_id).subscribe( resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
