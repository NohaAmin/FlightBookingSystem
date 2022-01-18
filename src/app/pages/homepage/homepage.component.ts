import { Component, OnInit } from '@angular/core';
import {FlightsDataService} from "../../services/flights-data.service";
import {FlightData} from "../../models/flight-data";
import {FlightsDataHelper} from "../../helpers/flights-data-helper";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  flightData: FlightData[] = [];
  displayedFlights: FlightData[] = [];
  // displayedFlights: ReplaySubject<FlightData[]> = new ReplaySubject<FlightData[]>()

  constructor(private flightsDataService: FlightsDataService) { }

  ngOnInit(): void {
    this.flightsDataService.getFlightData().subscribe((res) => {
      this.flightData = res;
      this.displayedFlights = res;

      let value = this.flightData[0]

      let testDate = FlightsDataHelper.mapDateTimeValue(value.departureDate, value.departureTime, value.duration, 'date')
      let testTime = FlightsDataHelper.mapDateTimeValue(value.departureDate, value.departureTime, value.duration, 'time');

      console.log('departureDate', value.departureDate, 'departureTime', value.departureTime, 'duration', value.duration)
      console.log('testDate', testDate, 'testTime', testTime)
    })
  }

  showingFilteredFlights(selected: FlightData[]) {
    this.displayedFlights = selected;
  }
}
