import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { AntecedentePatologicoService } from 'src/app/services/antecedente-patologico.service';
import { format } from 'date-fns';
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
    private antecedentePatologicoService: AntecedentePatologicoService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      razon: ['', Validators.required],
      agno: ['', Validators.required],
      evolucion: ['', Validators.required],
      paciente_id: [this.navParams.get('paciente_id')],
    });
  }
  crear() {
    const agno = format(new Date(this.myForm.value.agno), 'dd-MM-yyyy');
    console.log(agno);
    this.antecedentePatologicoService.crear({...this.myForm.value, agno}, this.myForm.value.paciente_id).subscribe( resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
