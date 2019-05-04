import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';

export const appRoutes: Routes = [
    {path : 'home', component: HomeComponent, canActivate : [AuthGuard]},
    {
        path : 'signup', component: UserComponent,
        children : [{path: '', component: SignUpComponent}]
    },
    {
        path : 'login', component: UserComponent,
        children : [{path: '', component: SignInComponent}]
    },
    {path : 'orders', component : OrdersComponent, canActivate : [AuthGuard]},
    {path : 'order', children : [
    {path : '', component : OrderComponent, canActivate : [AuthGuard]},
    {path : 'edit/:id', component : OrderComponent}
    ]},
    {path : '', redirectTo :'/login', pathMatch : 'full'}
];