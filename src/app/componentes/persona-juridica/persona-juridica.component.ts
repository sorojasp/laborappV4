import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-juridica',
  templateUrl: './persona-juridica.component.html',
  styleUrls: ['./persona-juridica.component.scss'],
})
export class PersonaJuridicaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  seguir()
  {
    // this.router.navigate(['contrato-laboral']);
      // this.router.navigateByUrl('/demandado/contrato-laboral');
      this.router.navigate(['home/demandado/contrato-laboral']);
  }

}
