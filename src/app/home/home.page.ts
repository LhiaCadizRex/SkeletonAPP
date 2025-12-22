import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  email: string = ''; 
  usuario: string='';
  bienvenidos: string='Bienvenid@';

  constructor(private menu: MenuController, private route: ActivatedRoute) {}
  
  ionViewWillEnter() {
    this.menu.close('mainMenu');
    console.log("ionViewDidEnter");
  }

  ngOnInit() { 
    // Obtener los parámetros de la URL
    this.menu.close('mainMenu'); //Cierra el menú
    this.usuario = localStorage.getItem('usuario') || '';
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.usuario=params['usuario']; 
    });
  }

}
