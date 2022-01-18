import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDatatableComponent } from './flights-datatable.component';

describe('FlightsDatatableComponent', () => {
  let component: FlightsDatatableComponent;
  let fixture: ComponentFixture<FlightsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
