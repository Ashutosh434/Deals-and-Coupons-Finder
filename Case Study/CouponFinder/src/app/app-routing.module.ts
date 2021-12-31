import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginModelComponent } from './../../../deals-coupons/src/app/login-model/login-model.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CouponComponent } from './coupon/coupon.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'register',component: RegisterComponent},
  { path: 'coupon', component: CouponComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'login', component: UserloginComponent },

  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
