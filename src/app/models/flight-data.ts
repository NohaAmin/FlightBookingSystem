export interface FlightData {
  flightNo: number;
  origin: string;
  destination: string;
  departureDate: string | Date;
  departureTime: string;
  arrivalDate: string | Date;
  arrivalTime: string;
  duration: number;
  fare: string;
}
