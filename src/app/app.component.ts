import { Component, OnInit } from '@angular/core';
import { Plugins, StatusBarStyle} from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { PAGE_URL } from './config/pages.config';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = PAGE_URL;
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
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

  ngOnInit() {
  }
}
