import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculoNutricionalPage } from './calculo-nutricional.page';

describe('CalculoNutricionalPage', () => {
  let component: CalculoNutricionalPage;
  let fixture: ComponentFixture<CalculoNutricionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoNutricionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculoNutricionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
