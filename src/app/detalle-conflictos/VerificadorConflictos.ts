import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

export class VerificadorConflictos {

    constructor(
        private conflictos?: any,
        private router?: Router,
        private route?: ActivatedRoute,
        private navigationExtras?: NavigationExtras
     )
    {
    }

    public SetParamsConflicto()
    {
        this.navigationExtras = {
            queryParams: {
                opciones: JSON.stringify(this.conflictos),
            }
        };
        return this.navigationExtras;
    }

    public SetRutaInicialConflicto()
    {
      // tslint:disable-next-line: no-inferrable-types
      let indice: number = 0;

      this.conflictos.forEach( (element: any) => {

            if (element.isChecked === true) {
              if (indice === 0) {
                this.router.navigate([element.redirectTo], this.SetParamsConflicto());
              }
              indice++;
            }
      });
    }
    public SetRutaSecundariaConflicto(){

       // tslint:disable-next-line: no-inferrable-types
        let indice: number = 0;

        this.conflictos.forEach((element: any) =>  {
                if ( element.isChecked === true )
                {
                  if ( indice === 0 ){
                    element.isChecked = !element.isChecked;
                  }
                  indice++;
                }
        });

        indice = 0;
        let contarRutas = 0;
        this.conflictos.forEach((element: any) => {
            if (element.isChecked === true) {
              if (indice === 0) {
                this.router.navigate([element.redirectTo], this.SetParamsConflicto());
              }
              indice++;
            }
            if (element.isChecked === false)
            {
              contarRutas++;
            }
          });

        if (contarRutas === this.conflictos.length )
        {
            this.router.navigate([this.conflictos[8].redirectTo]);
        }
    }
}
