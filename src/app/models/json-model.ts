export interface JsonModel {
  flightNo: number;
  origin: string;
  destination: string;
  departureDate: string | Date;
  departureTime: string | Date;
  duration: number;
  fare: number;
}
