import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

credential = {
  userName:"",
  password:""
}


  constructor(private route:Router, private service:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.credential);
    if((this.credential.userName!='' && this.credential.password!='') && (this.credential.userName!=null && this.credential.password!=null))
    {
             this.service.getAuth(this.credential).subscribe((response:any)=>{
              console.log(response.token);
              this.service.loginuser(response.token);
              window.location.href="/coupon"
             },
             error=>{ alert("invalid Crdential");
             })

    }
    else{
      alert("Login UnSuccessful")
    }

   }

}
