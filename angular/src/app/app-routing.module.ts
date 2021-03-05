import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CusdashboardComponent } from './cusdashboard/cusdashboard.component';
import { ViewLoanDetailsComponent } from './cusdashboard/view-loan-details/view-loan-details.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HomeComponent } from './home/home.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"adminlogin", component:AdminloginComponent
  },
  {
    path:"customerlogin", component:CustomerloginComponent
  },
  {
    path:"registercustomer", component:RegistercustomerComponent
  },
  {
    path:"cusdashboard", component:CusdashboardComponent
  },
  {
    path:"view-loan-details", component:ViewLoanDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
