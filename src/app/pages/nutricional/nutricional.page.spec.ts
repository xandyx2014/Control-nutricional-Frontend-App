import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutricionalPage } from './nutricional.page';

describe('NutricionalPage', () => {
  let component: NutricionalPage;
  let fixture: ComponentFixture<NutricionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutricionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
