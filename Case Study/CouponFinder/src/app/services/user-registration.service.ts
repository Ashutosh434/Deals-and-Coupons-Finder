import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User1 } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: User1){
    return this.http.post("http://localhost:8090/user/add",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8090/user/list");
  }


  public deleteUser(id: string){
    return this.http.delete("http://localhost:9090/delete/"+id);
  }
}
