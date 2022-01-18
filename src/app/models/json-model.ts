export interface JsonModel {
  flightNo: number;
  origin: string;
  destination: string;
  departureDate: string | Date;
  departureTime: string;
  duration: number;
  fare: number;
}
