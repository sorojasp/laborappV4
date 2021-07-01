import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abogado',
  templateUrl: './abogado.page.html',
  styleUrls: ['./abogado.page.scss'],
})
export class AbogadoPage implements OnInit {

  segmentModel = 'demanda';

  constructor(
  ) { }

  ngOnInit() {

  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

}
