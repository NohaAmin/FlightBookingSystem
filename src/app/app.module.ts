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
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FlightsDatasheetComponent } from './components/flights-datasheet/flights-datasheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TicketFormComponent,
    SearchPageComponent,
    FlightsDatasheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
