import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API, URL_USER_STORE } from '../config/pages.config';
import { Plugins } from '@capacitor/core';
import { RespUsuario, UsuarioTipo } from '../interface/user.interface';
import { Router } from '@angular/router';
const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = URL_API;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  async login(usuario, password) {
    this.http.post(`${this.url}/usuario/login`, {
      usuario,
      password
    }).subscribe( async (resp: RespUsuario) => {
      await Storage.set({
        key: URL_USER_STORE,
        value: JSON.stringify(resp)
      });
      if (resp.data.tipo === UsuarioTipo.paciente) {
        const id = resp.paciente.id;
        await this.router.navigate(['/home', id]);
      } else {
        await this.router.navigate(['/pacientes']);
      }
    });
  }
  async userAuth(): Promise<RespUsuario> {
    const storage = await Storage.get({
      key: URL_USER_STORE
    });
    return JSON.parse(storage.value);
  }
  async logout() {
    await Storage.remove({
      key: URL_USER_STORE
    });
  }
}
