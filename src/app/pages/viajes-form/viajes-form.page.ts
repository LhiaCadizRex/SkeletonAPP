import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular';  
@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.page.html',
  styleUrls: ['./viajes-form.page.scss'],
  standalone: false,
})
export class ViajesFormPage implements OnInit {

  constructor(private menu: MenuController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
