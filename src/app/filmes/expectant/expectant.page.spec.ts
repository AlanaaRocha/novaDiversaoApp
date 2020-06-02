import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpectantPage } from './expectant.page';

describe('ExpectantPage', () => {
  let component: ExpectantPage;
  let fixture: ComponentFixture<ExpectantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpectantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
