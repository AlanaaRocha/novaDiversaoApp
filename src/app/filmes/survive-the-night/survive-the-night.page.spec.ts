import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurviveTheNightPage } from './survive-the-night.page';

describe('SurviveTheNightPage', () => {
  let component: SurviveTheNightPage;
  let fixture: ComponentFixture<SurviveTheNightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurviveTheNightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurviveTheNightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
