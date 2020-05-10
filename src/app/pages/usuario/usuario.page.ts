import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interface/user.interface';
import * as isEmpty from 'lodash.isempty';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuario: Usuario;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((resp: Usuario) => {
      console.log(resp);
      this.usuario = resp;
      // console.log(resp);
      // console.log(isEmpty(resp));
    });
  }
  estaVacio(value) {
    return isEmpty(value);
  }
  ngOnInit() {
  }

}
