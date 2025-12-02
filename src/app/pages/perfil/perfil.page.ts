import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  email: string = '';
  telefono: string = '';


  constructor(private menu: MenuController, private route: ActivatedRoute, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

  editarPerfil() {
    this.navCtrl.navigateForward('/registro');
  }
}
