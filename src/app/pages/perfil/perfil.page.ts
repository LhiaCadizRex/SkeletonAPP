import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {


  constructor(private menu: MenuController, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.menu.close('mainMenu');
  }
}
