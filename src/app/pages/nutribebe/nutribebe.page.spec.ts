import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutribebePage } from './nutribebe.page';

describe('NutribebePage', () => {
  let component: NutribebePage;
  let fixture: ComponentFixture<NutribebePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutribebePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutribebePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
