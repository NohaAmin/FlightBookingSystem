import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TicketFormComponent } from './pages/ticket-form/ticket-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { FlightsDatatableComponent } from './components/flights-datatable/flights-datatable.component';
import { AllFlightsDataComponent } from './pages/all-flights-data/all-flights-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarModule} from "primeng/calendar";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TicketFormComponent,
    SearchContainerComponent,
    FlightsDatatableComponent,
    AllFlightsDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    NgbModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
