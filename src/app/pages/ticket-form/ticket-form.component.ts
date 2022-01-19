import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {FlightsDataService} from "../../services/flights-data.service";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  readonly seatClass: string[] = ['Economy', 'Premium Economy', 'First Class', 'Business Class'];
  isRendered = false;
  today: Date = new Date()
  maxAllowedDate: Date = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1);

  ticketForm: FormGroup = new FormGroup({}, []);

  constructor(private activatedRoute: ActivatedRoute,
              private flightsDataService: FlightsDataService,
              private validationService: ValidationService) {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ticketForm.controls;
  }

  ngOnInit(): void {
    const ticketId: number = +this.activatedRoute.snapshot.paramMap.get('id')!
    this.flightsDataService.getFlightById(ticketId).subscribe((flight) => {
      this.ticketForm = new FormGroup({
        'firstName': new FormControl('', [Validators.required, this.validationService.noWhiteSpaceValidator]),
        'middleName': new FormControl('', [Validators.required, this.validationService.noWhiteSpaceValidator]),
        'lastName': new FormControl('', [Validators.required, this.validationService.noWhiteSpaceValidator]),
        'birthDate': new FormControl('', [Validators.required]),
        'routeOrigin': new FormControl(flight.origin),
        'routeDestination': new FormControl(flight.destination),
        'flightNumber': new FormControl(flight.flightNo),
        'seatClass': new FormControl('', [Validators.required]),
        'departureDate': new FormControl(new Date(flight.departureDate).toDateString()),
        'departureTime': new FormControl(flight.departureTime),
        'arrivalDate': new FormControl(new Date(flight.arrivalDate).toDateString()),
        'arrivalTime': new FormControl(flight.arrivalTime),
        'flightFare': new FormControl(flight.fare)
      });
      this.isRendered = true;
    })
  }

  onSubmit() {
    console.log(this.ticketForm.valid)
  }

}
