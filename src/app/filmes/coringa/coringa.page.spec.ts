import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoringaPage } from './coringa.page';

describe('CoringaPage', () => {
  let component: CoringaPage;
  let fixture: ComponentFixture<CoringaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoringaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoringaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
