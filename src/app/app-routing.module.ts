import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {TicketFormComponent} from "./pages/ticket-form/ticket-form.component";

const routes: Routes = [
  {path: 'flight-dashboard', component: HomepageComponent},
  {path: 'ticket-form', component: TicketFormComponent},
  {path: 'flight-dashboard/:id/ticket', component: TicketFormComponent},
  {path: '', redirectTo: 'flight-dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
