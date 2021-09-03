import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpCallsService,private route:Router) { }

  ngOnInit(): void {
  }

  formSubmit(data:NgForm):void{
    this.http.AdLogin(data.value).subscribe((x)=>{
      if(x.status==200&&x.body.data){
        console.log(x.body.data)
        this.http.userDetail=x.body.data;
        localStorage.setItem("mSystemJwtKey",x.body.token)
this.http.openSnakBar(x.body.message);
this.route.navigateByUrl("/home")
      }else{
        this.http.openSnakBar(x.body.message);
 
      }

    },(err)=>{
      this.http.openSnakBar("Failed ! Something Went Wrong");
    })
  }

}
