import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-conflictos',
  templateUrl: './detalle-conflictos.page.html',
  styleUrls: ['./detalle-conflictos.page.scss'],
})
export class DetalleConflictosPage implements OnInit {

  data:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){ 

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
         console.log(this.data = JSON.parse(params.special));
        }
    });
  }

  ngOnInit() {
  }

}
