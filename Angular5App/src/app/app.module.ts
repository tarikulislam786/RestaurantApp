
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';


import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';

@NgModule({
  declarations: [
   // BrowserModule,
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    
    //HttpClientModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot({
    timeOut : 4000,
    positionClass : 'toast-top-right',
    preventDuplicates : true, 
    progressBar : true,
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)

  ],

  entryComponents : [OrderItemsComponent],
  providers: [UserService, AuthGuard, OrderService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
