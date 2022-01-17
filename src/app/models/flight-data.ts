export interface FlightData {
  flightNo: number;
  origin: string;
  destination: string;
  departureDate: string | Date;
  departureTime: string | Date;
  arrivalDate: string | Date;
  arrivalTime: string | Date;
  duration: number;
  fare: string;
}
