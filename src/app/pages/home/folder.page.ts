import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
