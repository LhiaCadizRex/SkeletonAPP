import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular'; 
@Component({
  selector: 'app-viajes-det',
  templateUrl: './viajes-det.page.html',
  styleUrls: ['./viajes-det.page.scss'],
  standalone: false,
})
export class ViajesDetPage implements OnInit {

  constructor(private menu: MenuController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
