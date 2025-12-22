import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Dbservice } from 'src/app/services/dbservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  email: string = '';
  usuario: string = '';
  password: string = '';
  constructor(private navCtrl: NavController,
    private alertController: AlertController,
    private Dbservice: Dbservice) { }

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

  async login() {

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

    //VALIDACIONES CORRECTAS

    /*localStorage.setItem('sesion_iniciada','true')

    this.navCtrl.navigateForward(['/home'], {
      queryParams: {
        email: this.email
      }
    });*/


    const logged = await this.Dbservice.validarUsuario(this.email, this.password);
    if (logged) {

      localStorage.setItem('sesion_iniciada', 'true')
      localStorage.setItem('usuario', logged.usuario)

      this.navCtrl.navigateForward(['/home'], {
        queryParams: {
          email: this.email,
          usuario: logged.usuario
        }
      });
    } else {
      this.mostrarAlerta('Este usuario no existe');
    }


  }

  registro() {
    this.navCtrl.navigateForward(['/registro']);

  }

  async reset() {
    const alert = await this.alertController.create({
      header: 'Recuperar contraseña',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo registrado'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: async (data) => {

            if (!data.email) {
              this.mostrarAlerta('Debes ingresar un correo');
              return false;
            }

            if (!this.validarEmail(data.email)) {
              this.mostrarAlerta('Formato de correo inválido');
              return false;
            }

            const existe = await this.Dbservice.reset(data.email);

            if (existe) {
              this.mostrarAlerta(
                'Si el correo está registrado, recibirás instrucciones para recuperar tu contraseña.'
              );
            } else {
              this.mostrarAlerta(
                'Si el correo está registrado, recibirás instrucciones para recuperar tu contraseña.'
              );
            }

            return true;
          }
        }
      ]
    });

    await alert.present();
  }



}
