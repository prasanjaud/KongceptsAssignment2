import { Component, OnInit } from '@angular/core';
import { loantypes } from 'src/app/class/loantypes';
import { ApiService } from 'src/app/service/apiService';

@Component({
  selector: 'app-view-loan-details',
  templateUrl: './view-loan-details.component.html',
  styleUrls: ['./view-loan-details.component.css']
})
export class ViewLoanDetailsComponent implements OnInit {

  constructor(private service:ApiService) { }

  listLoanTypes: loantypes[] = [];

  ngOnInit(): void {
    this.service.getloantypes().subscribe(data => {
      this.listLoanTypes = data;
    })
  }

}
