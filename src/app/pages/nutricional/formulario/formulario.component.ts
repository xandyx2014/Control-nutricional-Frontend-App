import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addDays, formatISO } from 'date-fns';
import { NutrienteService } from 'src/app/services/nutriente.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private fb: FormBuilder,
    private nutrienteService: NutrienteService
  ) { }
  ngOnInit() {
    this.crearFormulario();
  }
  crearFormulario() {
    const hoy =  formatISO(new Date(), { format: 'extended'});
    const siguiente = formatISO(addDays(new Date(), 60), { format: 'extended'});
    this.myForm = this.fb.group({
      fechaInicial: [ hoy, Validators.required],
      fechaSiguiente: [ siguiente, Validators.required],
      paciente_id: [this.navParams.get('paciente_id'), Validators.required],
      estado: [false, Validators.required],
      descripcion: [''],
    });
  }
  crear() {
    console.log(this.myForm.value);
    this.nutrienteService.crearNutriente(this.myForm.value).subscribe(resp => {
      this.modalCtrl.dismiss({
        ok: true
      });
      this.crearFormulario();
    });
  }
  cerrarModal() {
    this.modalCtrl.dismiss({
      ok: false
    });
  }
}
