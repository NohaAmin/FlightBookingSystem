import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {TicketFormComponent} from "./pages/ticket-form/ticket-form.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'homepage', component: HomepageComponent},
      {path: 'ticket-form/:id/purchase', component: TicketFormComponent},
      {path: '', redirectTo: 'homepage', pathMatch: 'full'}
    ]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
