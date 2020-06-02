import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackyardigansPage } from './backyardigans.page';

describe('BackyardigansPage', () => {
  let component: BackyardigansPage;
  let fixture: ComponentFixture<BackyardigansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackyardigansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackyardigansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
