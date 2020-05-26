import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmmenitiesPage } from './ammenities.page';

describe('AmmenitiesPage', () => {
  let component: AmmenitiesPage;
  let fixture: ComponentFixture<AmmenitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmenitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmmenitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
