import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coupon } from './coupon';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }


  getAllCoupons(){
    return this.http.get<coupon[]>('http://localhost:8090/coupon/list');
  }

  public AddCoupon(c:coupon){
    return this.http.post<coupon>("http://localhost:8090/coupon/add",c);
  }

  public updateCoupon(_coupon:coupon,couponId:String){
    return this.http.put<coupon>("http://localhost:8090/coupon/update"+couponId,_coupon);
  }

  public deleteCoupons(id: string | number){
    return this.http.delete("http://localhost:8090/coupon/"+id)
    }

  public getUsers(){
    return this.http.get("http://localhost:8090/user/list");
  }

  public deleteUser(id: string | number){
    return this.http.delete("http://localhost:8090/user/"+id)
    }

}
