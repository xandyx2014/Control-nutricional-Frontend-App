import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.menuCtrl.enable(false);
  }
  login() {
    const {
      usuario,
      password
    } = this.myForm.value;
    this.authService.login( usuario, password);
  }
  ionViewWillEnter() {
    this.authService.logout();
  }

}
