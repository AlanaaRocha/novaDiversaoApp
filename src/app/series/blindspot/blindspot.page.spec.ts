import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlindspotPage } from './blindspot.page';

describe('BlindspotPage', () => {
  let component: BlindspotPage;
  let fixture: ComponentFixture<BlindspotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlindspotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlindspotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
