import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilityBooking } from './facility-booking';

describe('FacilityBooking', () => {
  let component: FacilityBooking;
  let fixture: ComponentFixture<FacilityBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityBooking],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
