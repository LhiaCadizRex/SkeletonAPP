import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  email: string = '';
  password: string = '';
  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  //alerta error
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  //validar formato mail
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  login() {

    if (!this.email) {
      this.mostrarAlerta('Completa el campo para continuar.');
      return;
    }
    if (!this.validarEmail(this.email)) {
      this.mostrarAlerta('Ingrese un formato correcto.');
      return;
    }
    if (!this.password) {
      this.mostrarAlerta('Completa el campo para continuar.');
      return;
    }
    if (this.password.length < 6) {
      this.mostrarAlerta('La contraseña no puede tener menos de 6 caracteres.');
      return;
    }

    this.navCtrl.navigateForward(['/home'], {
      queryParams: {
        email: this.email
      }
    });

  }

  registro() {

  }

}
