import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private http:HttpCallsService) { }

  ngOnInit(): void {
  }
  updatePass(data:NgForm){
    if(data.valid){
     this.http.updateAdminPass(data.value).subscribe((x)=>{
       console.log(x)
if(x.status==200&&x.body.data.modifiedCount==1){
  this.http.openSnakBar("-"+x.body.message);
  localStorage.clear();
  location.reload();
}
else{
  this.http.openSnakBar("Invalid Details")
}
     },(err)=>{
      this.http.openSnakBar("Failed ! Something Went Wrong");

     })

    }
     
  }

}
