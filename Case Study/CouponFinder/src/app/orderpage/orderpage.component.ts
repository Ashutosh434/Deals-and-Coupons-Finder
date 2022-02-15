import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { coupon } from '../coupon';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {


  coupons: coupon[]= [];
  formValue!:FormGroup;
  couponObj : coupon = new coupon("","","","","","");
  result: any;
  searchText: any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  orderCoupon(){

  }

}
