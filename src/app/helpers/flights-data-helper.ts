import {FlightData} from "../models/flight-data";
import addHours from "date-fns/addHours";

export class FlightsDataHelper {

  static getRoutePointsSet(flights: FlightData[]): string[] {
    const originPoints: string[] = flights.map((f) => f.origin);
    const destinationPoints: string[] = flights.map((f) => f.destination);
    const allPoints = [...originPoints, ...destinationPoints];
    return Array.from(new Set(allPoints));
  }

  static mapDateTimeValue(date: string | Date, time: string, duration: number, output: 'date' | 'time'): string {
    const dateValue: Date = new Date(date);
    const hoursValue: number = +time.split(':')[0]
    const minutesValue: number = +time.split(':')[1]
    const departureDate = new Date(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate(), hoursValue, minutesValue);
    const arrivalDate = addHours(departureDate, duration);

    switch (output) {
      case "date":
        return arrivalDate.toLocaleDateString();
      case "time":
        const outputHours = ((arrivalDate.getHours() < 10)? '0' : '') + `${arrivalDate.getHours()}`
        const outputMinutes = `${arrivalDate.getMinutes()}` + ((arrivalDate.getMinutes() < 10)? '0' : '')
        return `${outputHours}:${outputMinutes}`
    }
  }
}
