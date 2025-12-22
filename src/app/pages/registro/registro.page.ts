import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 
import { Dbservice } from 'src/app/services/dbservice';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  nombre: string='';
  apellido: string='';
  usuario: string='';
  email: string='';
  password: string='';




  constructor(private alertController: AlertController,
              private menu: MenuController,
              private route: ActivatedRoute,
              private Dbservice: Dbservice) { }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

   async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*guardar()
  {if (this.nombre.trim()==='' || this.apellido.trim() === '') {
        this.presentAlert('Error: nombre y apellido vacios');
      } else {
        this.presentAlert('Datos Correctos  usuario:  '+this.nombre);  //
      }}*/

  guardarDatos(){
    this.Dbservice.insertUsuario(this.nombre, this.apellido, this.usuario, this.email, this.password)
    .then(()=> {
      this.presentAlert('Datos guardados exitosamente');
    })
    .catch(error=> {
      this.presentAlert('Error al guardar datos: '+error);
    });
  }
}
