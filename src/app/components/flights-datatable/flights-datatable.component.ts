import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FlightData} from "../../models/flight-data";
import {Router} from "@angular/router";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-flights-datatable',
  templateUrl: './flights-datatable.component.html',
  styleUrls: ['./flights-datatable.component.scss']
})
export class FlightsDatatableComponent implements OnInit
  // , AfterViewInit, OnChanges
{

  @Input() flightData$: ReplaySubject<FlightData[]> = new ReplaySubject<FlightData[]>();
  @Input() flightData: FlightData[] = [];
   allFlightData: FlightData[] = [];
  readonly flightDataHeaders: string[] = ['Flight No.', 'Origin', 'Destination', 'Departure Date', 'Departure Time', 'Arrival Date', 'Arrival Time', 'Fare'];

  paginatedFlightDate: FlightData[] = [];

  totalRecords: number = 10;
  rowsPerPage: number = 20;
  selectedPageNumber: number = 0;
  selectedStartingRow = 0;
  showPaginator = false;

  initialPaginator: { first: number, page: number, pageCount: number, rows: number } =
    {first: 0, page: 0, pageCount: 10, rows: this.rowsPerPage}

  constructor(private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', this.flightData.length)
  //   this.totalRecords = this.flightData.length;
  //   this.showPaginator = (this.totalRecords > 0);
  //   console.log('totalRecords', this.totalRecords, 'showPaginator', this.showPaginator)
  // }

  // ngAfterViewInit(): void {
  //   console.log(this.flightData.length)
  //   this.cdr.detectChanges()
  // }

  ngOnInit(): void {
    this.flightData$.subscribe((flights) => {
      this.totalRecords = flights.length;
      this.showPaginator = (this.totalRecords > 0);
      this.allFlightData = flights;
      this.navigatePage(this.initialPaginator);
    })
  }

  onSelectingItem(item: FlightData) {
    this.router.navigateByUrl(`dashboard/${item.flightNo}/ticket`).then();
  }

  navigatePage(selected: { first: number, page: number, pageCount: number, rows: number }) {
    this.selectedPageNumber = selected.page;
    this.selectedStartingRow = selected.first;
    this.paginatedFlightDate = this.allFlightData.slice(this.selectedStartingRow, this.selectedStartingRow + this.rowsPerPage);
  }
}
