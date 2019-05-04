
//import {Http, HTTP_PROVIDERS} from '@angular/http';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpErrorResponse } from '@angular/common/http';
//import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
//import 'rxjs/add/operator/do';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router : Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
            
            if(localStorage.getItem('userToken') != null) {
                const clonedreq = req.clone ({
                    headers : req.headers.set("Authorization", "Bearer "+ localStorage.getItem('userToken'))
                });
                // return next.handle(clonedreq)
                // .do(
                //        succ => {},
                //        err => {
                //            if(err.status === 401)
                //            this.router.navigateByUrl('/login');
                //        }
                //     );
                return next.handle(clonedreq).pipe(tap(
                    (err: any) => {
                      if (err instanceof HttpErrorResponse) {
                        console.log(err);
                        console.log('req url :: ' + req.url);
                        if (err.status === 401) {
                          this.router.navigate(['user']);
                        }
                      }
                    }
                  ));
            } else {
                this.router.navigateByUrl('/login');
            }
        }else {
            return next.handle(req);
          }
                
    }

}