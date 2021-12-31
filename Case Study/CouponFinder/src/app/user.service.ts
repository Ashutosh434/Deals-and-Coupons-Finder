import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllCoupons() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient, private route:Router) {
  }
  public loginUser(user: User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/login",user)
  }

  public getUser(useremail:String):Observable<any>{
    return this.http.get<User>("http://localhost:8090/getuser/"+useremail)
  }

  public registerUser(user: User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/register",user)
  }

// ...........................for user authentication...........................

getAuth(credential:any){
  return this.http.post("http://localhost:8090/user/authenticate",credential);
}
// for user log in
 //for login user
 loginuser(token:any)
 {
     localStorage.setItem("token",token);
     return true;
 }

 // check user is login or not
 isLoggedIn()
 {
   let token = localStorage.getItem("token");
   if(token==undefined || token==null || token=='')
   {
     return false;
   }else{
     return true;
   }
 }
// logout user
logout(){
  localStorage.removeItem("token");
  return true;
}

// for get token
getToken()
{
 return localStorage.getItem("token");
}
}
