import { Component, OnInit } from '@angular/core';
import { User1 } from '../models/User';
import { UserRegistrationService } from '../services/user-registration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User1=new User1("","","","");
  message:any;

  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
  }


public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }
}
