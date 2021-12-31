import { User } from 'src/app/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
import { coupon } from '../coupon';
import { UserService } from '../user.service';
import { User1 } from '../models/User';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  coupons: coupon[]= [];
  formValue!:FormGroup;
  couponObj : coupon = new coupon("","","","","","");
  result: any;

  //....................................................................
//for users

users:any;



//...................................................................
  searchText: any;

  constructor(private adminService:AdminService, private fb:FormBuilder, private userService:UserService ) { }

  //for user-------------------------------------------------------------------------------------

  public deleteUser(id: string | number){
    let resp = this.adminService.deleteUser(id);
    resp.subscribe((data)=>this.users=data)

  }


  public deleteCoupons(id: string | number){
    let resp = this.adminService.deleteCoupons(id);
    resp.subscribe((data: any)=>this.coupons=data)

  }



//----------------------------------------------------------------------------------------
  ngOnInit(): void {

    //for user----------------------------------------------------------

    let resp = this.adminService.getUsers();
    resp.subscribe((data)=>this.users=data);


//---------------------------------------------------------------


// for coupons---------------------------------------------------
    this.getCoupons()


    this.formValue=this.fb.group({
    couponId: [""],
    provider: [""],
    couponCode: [""],
    category: [""],
    description: [""],
    expiryDate: [""],
    })

  }



getCoupons(){
  console.log('Test Call');
   this.adminService.getAllCoupons().subscribe(res=>{this.coupons=res});
}




















// methods for coupons


  addCoupon(){
    console.log("in add coupon method");
    this.couponObj.couponId=this.formValue.value.id;
    this.couponObj.provider=this.formValue.value.provider;
    this.couponObj.couponCode=this.formValue.value.couponCode;
    this.couponObj.category=this.formValue.value.category;
    this.couponObj.description=this.formValue.value.description;
    this.couponObj.expiryDate=this.formValue.value.expiryDate;

    this.adminService.AddCoupon(this.couponObj).subscribe(res=>{this.coupons.push(res)});
    console.log("Coupon Added successfully");
    alert("Coupon Added successfully");
    this.ngOnInit();
  }

  editCoupon(data:any){
    this.formValue.controls['id'].setValue(data.id);
    this.formValue.controls['provider'].setValue(data.provider);
    this.formValue.controls['couponCode'].setValue(data.couponCode);
    this.formValue.controls['category'].setValue(data.category);
    this.formValue.controls['description'].setValue(data.description);
    this.formValue.controls['expiryDate'].setValue(data.expiryDate);

  }

  updateCoupon(){
    console.log("in add  method");
    this.couponObj.couponId=this.formValue.value.couponId;
    this.couponObj.provider=this.formValue.value.provider;
    this.couponObj.couponCode=this.formValue.value.couponCode;
    this.couponObj.category=this.formValue.value.category;
    this.couponObj.description=this.formValue.value.description;
    this.couponObj.expiryDate=this.formValue.value.expiryDate;

    this.adminService.updateCoupon(this.couponObj,this.couponObj.couponId).subscribe(res=>{
      console.log("updated coupon successfully")
      alert("Coupon Updater successfully");
    });
  }







}



