import { Component, OnInit } from '@angular/core';
import { Customer } from '../class/customer';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private service:ApiService) { }

  listCustomer: Customer[] = [];

  ngOnInit(): void {
    this.service.getallcus().subscribe(data => {
      this.listCustomer = data;
    })
  }

}
