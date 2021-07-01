import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContratoLaboralPage } from './contrato-laboral.page';

describe('ContratoLaboralPage', () => {
  let component: ContratoLaboralPage;
  let fixture: ComponentFixture<ContratoLaboralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoLaboralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratoLaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
