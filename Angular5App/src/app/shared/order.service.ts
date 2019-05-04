import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly rootUrl = 'http://localhost:9408';
formData : Order;
orderItems : OrderItem[];
  constructor(private http : HttpClient) { }
  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      OrderItems : this.orderItems
    };
    return this.http.post(this.rootUrl +'/api/Order', body);
  }
  getOrderList() {
    return this.http.get(this.rootUrl +'/api/Order').toPromise();
   }
   getOrderByID(id:number):any {
    return this.http.get(this.rootUrl +'/api/Order/'+id).toPromise();
   }
   deleteOrder(id : number) {
    return this.http.delete(this.rootUrl +'/api/Order/'+id).toPromise();
   }
}
