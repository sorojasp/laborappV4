import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  valores = this.router.navigate(['/inicio']);

  constructor(private router: Router, private menuController: MenuController) { }

  menuOptions: any = [
    {
      icon: 'person',
      name: 'Perfil',
      redirectTo: 'home/perfil'
    },
    {
      icon: 'call',
      name: 'Contactar Abogado',
      redirectTo: 'home/abogado'
    },
    {
      icon: 'document-text',
      name: 'Generar Demanda',
      redirectTo: 'home/demandado'
    },
    {
      icon: 'exit',
      name: 'Salir',
      redirectTo: '/inicio'
    }
  ];

  ngOnInit() {}

  menuToggle()
  {
    this.menuController.toggle();
  }

  salir() {
    this.router.navigate(['/inicio']);
  }

  // ionViewWillLeave(){
  //   this.menuController.swipeEnable(false);
  // }

}
