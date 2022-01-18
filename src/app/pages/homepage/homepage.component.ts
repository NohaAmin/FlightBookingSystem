import {Component, OnInit} from '@angular/core';
import {FlightsDataService} from "../../services/flights-data.service";
import {FlightData} from "../../models/flight-data";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  flightData: FlightData[] = [];
  displayedFlights: FlightData[] = [];
  displayedFlights$: ReplaySubject<FlightData[]> = new ReplaySubject<FlightData[]>();

  constructor(private flightsDataService: FlightsDataService) {
  }

  ngOnInit(): void {
    this.flightsDataService.getFlightData().subscribe((res) => {
      this.flightData = res;
      this.displayedFlights = res;
      this.displayedFlights$.next(res);
    })
  }

  showingFilteredFlights(selected: FlightData[]) {
    this.displayedFlights = selected;
    this.displayedFlights$.next(selected);
  }
}
