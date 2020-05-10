import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API, URL_USER_STORE } from '../config/pages.config';
import { Plugins } from '@capacitor/core';
import { RespUsuario, UsuarioTipo } from '../interface/user.interface';
import { Router } from '@angular/router';
import { NotificacionService } from './notificacion.service';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = URL_API;
  private doctorValidate = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionService
  ) { }

  async login(usuario, password) {
      this.http.post(`${this.url}/usuario/login`, {
        usuario,
        password
      }).pipe(
        catchError(e => {
          alert(JSON.stringify(e));
          return 'e';
        })
      ).subscribe(
        async (resp: RespUsuario) => {
          if (!resp.message) {
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
          } else {
            this.notificacionService.presentToast(resp.message);
          }
        },
        (error) => {
          alert(JSON.stringify(error));
        });
  }
  async userAuth(): Promise<RespUsuario> {
    const storage = await Storage.get({
      key: URL_USER_STORE
    });
    return JSON.parse(storage.value);
  }
  validateDoctor() {
    return this.doctorValidate.asObservable();
  }
  async isDoctor(): Promise<boolean> {
    const user = await this.userAuth();
    // console.log('Usuario conectado', typeof user.paciente === 'undefined');
    if (user === null) {
      return false;
    }
    this.doctorValidate.next(typeof user.paciente === 'undefined');
    return (typeof user.paciente === 'undefined');
  }
  async logout() {
    await Storage.remove({
      key: URL_USER_STORE
    });
  }
}
