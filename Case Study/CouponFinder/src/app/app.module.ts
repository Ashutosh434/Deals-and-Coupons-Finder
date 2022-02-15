import { MatSliderModule } from '@angular/material/slider';
import { UserRegistrationService } from './services/user-registration.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CouponComponent } from './coupon/coupon.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import { SecurityComponent } from './security/security.component';
import { RegisterComponent } from './register/register.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { UpcommigDealsComponent } from './upcommig-deals/upcommig-deals.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'ng-sidebar';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CouponComponent,
    AdminDashboardComponent,
    SecurityComponent,
    RegisterComponent,
    SearchDeleteComponent,
    UserloginComponent,
    OrderpageComponent,
    UpcommigDealsComponent,
    SideNavComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    GooglePayButtonModule,
    SocialLoginModule,
    ReactiveFormsModule,
    MatSidenavModule,
    SidebarModule.forRoot()

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue:{
        autoLogin:false,
        providers:[
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '204531735379-4ibnb9dausf5vbtjspek02mbs99mggri.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ,UserRegistrationService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
