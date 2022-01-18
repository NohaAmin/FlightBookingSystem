import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlightsDataComponent } from './all-flights-data.component';

describe('AllFlightsDataComponent', () => {
  let component: AllFlightsDataComponent;
  let fixture: ComponentFixture<AllFlightsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFlightsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlightsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
