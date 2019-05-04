import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

//import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  readonly rootUrl = 'http://localhost:9408';
  constructor(private http: HttpClient) { }

  getItemList() {
   // return this.http.get(environment.apiURL +'/Item').toPromise();
   //var reqHeader = new HttpHeaders({'No-Auth' : 'True'});
   return this.http.get(this.rootUrl +'/api/Item').toPromise();

   // return this.http.post(this.rootUrl + '/api/User/Register', body, {headers : reqHeader});
  }
}
