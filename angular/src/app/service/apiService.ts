import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../class/customer';

@Injectable()
export class ApiService
{

    customer: Customer[] = [];
    readonly baseURL = 'http://localhost:8080/saveCus';

    constructor(private http:HttpClient){}

    postCustomer(cus: Customer){
        return this.http.post(this.baseURL, cus);
    }

    getloantypes(): Observable<any> {
        return this.http.get('http://localhost:8080/loanTypes');
    }

    getallcus(): Observable<any> {
        let token:any;
        let tokenstr = 'Bearer '+token;
        const headers = new HttpHeaders().set("Authorization", tokenstr);
        return this.http.get('http://localhost:8080/allcustomers', {headers,responseType: 'text' as 'json'});
    }

    public generateToken(request: any){
        return this.http.post("http://localhost:8080/authenticate", request, {responseType: 'text' as 'json'});
      }
    
    public welcome(token: any){
        let tokenstr = 'Bearer '+token;
        const headers = new HttpHeaders().set("Authorization", tokenstr);
        debugger
        return this.http.get("http://localhost:8080/allcustomers", {headers,responseType: 'text' as 'json'});
    }


}