import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaiPage } from './pai.page';

describe('PaiPage', () => {
  let component: PaiPage;
  let fixture: ComponentFixture<PaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
