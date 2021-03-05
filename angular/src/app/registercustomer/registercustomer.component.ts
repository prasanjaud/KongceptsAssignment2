import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ApiService } from '../service/apiService';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  constructor(private api:ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.resetForm();


    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
  public changeSuccessMessage() { 
    this._success.next(`Message successfully changed.`); 
  }

  resetForm(form?: NgForm) {
    if (form)
      form?.reset();
  }

  onClickSubmit(form: NgForm){

    this.api.postCustomer(form.value).subscribe((res) => {
      this.resetForm(form);
      this._success.next(`Registered successfully! Please Login`);
      // this.router.navigate(['cusdashboard']);
    },(error) => {
      console.log('Error is', error);
      this.resetForm(form);
    })
    console.log(form.value); 
  }

}
