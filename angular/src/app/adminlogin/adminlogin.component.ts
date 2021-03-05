import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service:ApiService) { }

  authRequest: any={
    "userName":"abc",
    "password":"123"
  };

  onClickSubmit(form: Form){
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>console.log("Token "+ data));
  }

  ngOnInit(): void {
  }

}
