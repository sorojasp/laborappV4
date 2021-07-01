import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-natural',
  templateUrl: './persona-natural.component.html',
  styleUrls: ['./persona-natural.component.scss'],
})
export class PersonaNaturalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  seguir()
  {
    this.router.navigate(['home/demandado/contrato-laboral']);
  }
}
