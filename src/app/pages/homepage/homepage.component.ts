import { Component, OnInit } from '@angular/core';
import {FlightsDataService} from "../../services/flights-data.service";
import {FlightData} from "../../models/flight-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  flightData: FlightData[] = [];
  readonly flightDataHeaders: string[] = ['Flight No.', 'Origin', 'Destination', 'Departure Date', 'Departure Time', 'Arrival Date', 'Arrival Time', 'Fare'];

  constructor(private flightsDataService: FlightsDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.flightsDataService.getFlightData().subscribe((res) => {
      this.flightData = res;
    })
  }

  onSelectingItem(item: FlightData) {
    console.log('onSelectingItem', item);
    this.router.navigateByUrl(`flight-dashboard/${item.flightNo}/ticket`).then();
  }
}
