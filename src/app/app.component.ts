import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

   private router: Router;
   private menuController: MenuController;

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  salir() {
    this.router.navigate(['/inicio']);
  }

}
