import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCoupons';

  buttonType="pay"
  buttonSizeMode="fill"
  buttonColor="white"

  paymentRequest={
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '',
      merchantName: 'Ashutosh'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '10.00',
      currencyCode: 'INR',
      countryCode: 'IN'
    }
  };
  onLoadPaymentData(event:any){
    console.log("Load Payment Data",event.detail)
  }

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ) {

  }

  ngOnInit(): void {
  }

// method for activating google sign in

  signInHandler():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/coupons').then();
    });
   }

   registrationHandler():void{
     this.router.navigateByUrl('/register').then();
   }

}
