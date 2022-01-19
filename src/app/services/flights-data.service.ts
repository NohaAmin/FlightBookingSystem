import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FlightData} from "../models/flight-data";
import {JsonModel} from "../models/json-model";
import {FlightsDataHelper} from "../helpers/flights-data-helper";
import isAfter from "date-fns/isAfter";

@Injectable({
  providedIn: 'root'
})
export class FlightsDataService {

  constructor(private http: HttpClient) {
  }

  getFlightData(): Observable<FlightData[]> {
    return this.http.get<JsonModel[]>('assets/mocked-data.json')
      .pipe(map((items) => {
        return items.filter((f) =>
          isAfter(new Date(f.departureDate), new Date()))
          .map((item) => ({
            ...item,
            fare: item.fare.toString(),
            arrivalDate: FlightsDataHelper.mapDateTimeValue(item.departureDate, item.departureTime, item.duration, 'date'),
            arrivalTime: FlightsDataHelper.mapDateTimeValue(item.departureDate, item.departureTime, item.duration, 'time')
          }))
      }))
  }

  getFlightById(id: number): Observable<FlightData> {
    return this.http.get<JsonModel[]>('assets/mocked-data.json')
      .pipe(map((items) => {
        const selected: JsonModel = items.find((f) => f.flightNo === id)!
        return {
          ...selected,
          fare: selected.fare.toString(),
          arrivalDate: FlightsDataHelper.mapDateTimeValue(selected.departureDate, selected.departureTime, selected.duration, 'date'),
          arrivalTime: FlightsDataHelper.mapDateTimeValue(selected.departureDate, selected.departureTime, selected.duration, 'time')
        }
      }))
  }

}
