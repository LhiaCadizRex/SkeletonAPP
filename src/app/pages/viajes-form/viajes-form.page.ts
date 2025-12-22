import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular';
import { Dbservice } from 'src/app/services/dbservice';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.page.html',
  styleUrls: ['./viajes-form.page.scss'],
  standalone: false,
})
export class ViajesFormPage implements OnInit {

  viaje = {
    nombre: '',
    destino: '',
    tipo: '',
    presupuesto: null,
    fechaInicio: new Date().toISOString()
  };

  constructor(private menu: MenuController, 
              private route: ActivatedRoute,
              private Dbservice: Dbservice) { }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

  crearViaje() {
    console.log('Viaje creado:', this.viaje);
  }

}
