import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly rootUrl = 'http://localhost:9408';
  constructor(private http : HttpClient) { }

  
  getCustomerList() {
    return this.http.get(this.rootUrl +'/api/Customer').toPromise();
   }
}
