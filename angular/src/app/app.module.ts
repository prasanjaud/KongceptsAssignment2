import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './service/apiService';
import { RouterModule } from '@angular/router';
import { CusdashboardComponent } from './cusdashboard/cusdashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewLoanDetailsComponent } from './cusdashboard/view-loan-details/view-loan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    CustomerloginComponent,
    RegistercustomerComponent,
    CusdashboardComponent,
    ViewLoanDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
