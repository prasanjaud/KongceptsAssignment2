import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  constructor(private service:ApiService,
    private router:Router) { }

  // authRequest: any={
  //   "userName":"aabc",
  //   "password":"123"
  // };

  response: any;
  token: any;

  resetForm(form?: NgForm) {
    if (form)
      form?.reset();
  }

  onClickSubmit(form: NgForm){
    this.service.generateToken(form.value).subscribe((res)=>{
      this.resetForm();
      this.router.navigate(['admindashboard']);
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res));
    },(error) => {
      this._success.next(`Invalid Username or Password`);
      console.log('Error is', error);
      this.resetForm(form);
    })
    // resp.subscribe(data=> console.log("Token "+data));
    // console.log(form.value);
    //this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>console.log("Token "+ data));
  }
  // public accessApi(token: string){
  //   let resp=this.service.welcome(token);
  //   resp.subscribe(data=>this.response=data)
  // }

  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

}
