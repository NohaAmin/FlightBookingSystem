import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FlightData} from "../models/flight-data";
import {JsonModel} from "../models/json-model";
import {FlightsDataHelper} from "../helpers/flights-data-helper";

@Injectable({
  providedIn: 'root'
})
export class FlightsDataService {

  constructor(protected http: HttpClient) { }

  getFlightData(): Observable<FlightData[]> {
    return this.http.get<JsonModel[]>('assets/mocked-data.json')
      .pipe(map((items) => {
        return items.map((item) => ({
          ...item,
          fare: item.fare.toString(),
          arrivalDate: FlightsDataHelper.mapDateTimeValue(item.departureDate, item.departureTime, item.duration, 'date'),
          arrivalTime: FlightsDataHelper.mapDateTimeValue(item.departureDate, item.departureTime, item.duration, 'time')
        }))
      }))
  }
}
