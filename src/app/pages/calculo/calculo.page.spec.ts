import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculoPage } from './calculo.page';

describe('CalculoPage', () => {
  let component: CalculoPage;
  let fixture: ComponentFixture<CalculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
