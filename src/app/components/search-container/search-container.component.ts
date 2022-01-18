import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FlightData} from "../../models/flight-data";

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  @Input() allFlights: FlightData[] = [];
  @Output() searchFlights: EventEmitter<FlightData[]> = new EventEmitter<FlightData[]>()
  allRoutePoints: string[] = [];
  allOriginItems: string[] = [];
  allDestinationItems: string[] = [];
  selectedOrigin: string | null = null;
  selectedDestination: string | null = null;

  selectedDate: Date | null = null;
  today: Date = new Date()
  minAllowedDate: Date = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1);
  // activateSearch = false;
  isRendered = false;

  constructor() {
  }

  ngOnInit(): void {
    this.allRoutePoints = this.getRoutePointsSet(this.allFlights);
    this.allOriginItems = [...this.allRoutePoints];
    this.allDestinationItems = [...this.allRoutePoints];
    this.isRendered = true;
  }

  onSelectingOrigin() {
    this.allDestinationItems = this.excludeSelectedPoint(this.selectedOrigin);
    this.combineSearchFactors();
  }

  onSelectingDestination() {
    this.allOriginItems = this.excludeSelectedPoint(this.selectedDestination);
    this.combineSearchFactors();
  }

  excludeSelectedPoint(item: string | null): string[] {
    const targetPoints = [...this.allRoutePoints];
    item ? targetPoints.splice(targetPoints.indexOf(item), 1) : null;
    return targetPoints
  }

  getRoutePointsSet(flights: FlightData[]): string[] {
    const originPoints: string[] = flights.map((f) => f.origin);
    const destinationPoints: string[] = flights.map((f) => f.destination);
    const allPoints = [...originPoints, ...destinationPoints];
    return Array.from(new Set(allPoints));
  }

  selectDateModel() {
    this.combineSearchFactors();
    console.log('selectDateModel', this.selectedDate)
  }

  // activeSearchButton(): void {
  //   this.activateSearch = (!!this.selectedOrigin || !!this.selectedDestination || !!this.selectedDate);
  //

  // }

  combineSearchFactors() {
    const copyAllFlights = [...this.allFlights];
    const filteredWithOrigin: FlightData[] = (!!this.selectedOrigin) ?
      copyAllFlights.filter((f) => f.origin === this.selectedOrigin) : copyAllFlights;

    const filteredWithDestination: FlightData[] = (!!this.selectedDestination) ?
      filteredWithOrigin.filter((f) => f.destination === this.selectedDestination) : filteredWithOrigin;

    const filteredWithDate: FlightData[] = (!!this.selectedDate) ?
      filteredWithDestination.filter((f) => f.departureDate === this.selectedDate) : filteredWithDestination;

    this.searchFlights.emit(filteredWithDate);
  }
}
