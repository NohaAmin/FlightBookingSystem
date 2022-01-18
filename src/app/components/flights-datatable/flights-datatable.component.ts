import {Component, Input} from '@angular/core';
import {FlightData} from "../../models/flight-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flights-datatable',
  templateUrl: './flights-datatable.component.html',
  styleUrls: ['./flights-datatable.component.scss']
})
export class FlightsDatatableComponent {

  @Input() flightData: FlightData[] = [];
  readonly flightDataHeaders: string[] = ['Flight No.', 'Origin', 'Destination', 'Departure Date', 'Departure Time', 'Arrival Date', 'Arrival Time', 'Fare'];

  constructor(private router: Router) {
  }

  onSelectingItem(item: FlightData) {
    this.router.navigateByUrl(`dashboard/${item.flightNo}/ticket`).then();
  }
}
