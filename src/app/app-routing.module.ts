import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {TicketFormComponent} from "./pages/ticket-form/ticket-form.component";
import {AllFlightsDataComponent} from "./pages/all-flights-data/all-flights-data.component";
import {SearchContainerComponent} from "./components/search-container/search-container.component";

const routes: Routes = [
  {path: 'dashboard', component: HomepageComponent
    // , children: [
    //   {path: 'all-flights', component: AllFlightsDataComponent},
    //   {path: 'search-flights', component: SearchContainerComponent},
    //   {path: '', redirectTo: 'all-flights', pathMatch: 'full'}
    // ]
  },
  {path: 'ticket-form', component: TicketFormComponent},
  {path: 'dashboard/:id/ticket', component: TicketFormComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
