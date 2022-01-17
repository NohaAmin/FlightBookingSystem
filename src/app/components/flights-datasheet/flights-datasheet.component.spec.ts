import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDatasheetComponent } from './flights-datasheet.component';

describe('FlightsDatasheetComponent', () => {
  let component: FlightsDatasheetComponent;
  let fixture: ComponentFixture<FlightsDatasheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsDatasheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsDatasheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
