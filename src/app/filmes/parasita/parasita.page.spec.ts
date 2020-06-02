import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParasitaPage } from './parasita.page';

describe('ParasitaPage', () => {
  let component: ParasitaPage;
  let fixture: ComponentFixture<ParasitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParasitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParasitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
