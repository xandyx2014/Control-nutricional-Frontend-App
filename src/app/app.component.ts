import { Component, OnInit } from '@angular/core';
import { Plugins, StatusBarStyle} from '@capacitor/core';
import { Platform, MenuController } from '@ionic/angular';
import { PAGE_URL } from './config/pages.config';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = PAGE_URL;
  public show = false;
  constructor(
    private platform: Platform,
    public authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
    this.authService.validateDoctor().subscribe(resp => {
      this.show = resp;
    });
    this.authService.isDoctor();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    // this.agregarId();
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Light });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#CDCDCD' });
      }
    } catch (err) {
      console.warn('This is normal in a browser', err);
    }
  }
  async obtenerId(url: string) {
    const usuario = await this.authService.userAuth();
    if (usuario) {
      if (typeof usuario.paciente === 'undefined') {
        return 0;
      }
      this.router.navigate([`${url}`, usuario.paciente.id || 0]);
      // return `${url}/` + usuario.paciente.id || 0;
    }
    return 0;
  }

  ngOnInit() {
  }
  irWelcome() {
    this.router.navigate(['/welcome'], {replaceUrl: true});
  }
}
