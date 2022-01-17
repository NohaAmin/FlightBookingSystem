import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FlightData} from "../models/flight-data";
import {__assign} from "tslib";
import {JsonModel} from "../models/json-model";

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
          arrivalDate: item.departureDate,
          arrivalTime: item.departureTime
        }))
      }))
  }
}
