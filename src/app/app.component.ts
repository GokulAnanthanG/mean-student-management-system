import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { HttpCallsService } from './http-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  open:boolean=false//sidenav
  title = 'school-management-system';
  spinner:boolean=true;
  constructor(public http:HttpCallsService,private navigate:Router,private dialog:MatDialog){}

  ngOnInit(){
 this.http.protecter({token:this.http.getToken()}).subscribe((x)=>{
if(x.status==200&&x.body.status){
this.http.userDetail=x.body.data;
this.spinner=false
  this.http.openSnakBar("LogedIn")
  this.navigate.navigateByUrl("/home")
}
else{
 this.navigate.navigateByUrl("/AdLogin")
 this.spinner=false

}
},(err)=>{
  this.http.openSnakBar("Failed ! Something Went Wrong");
})
  }


  //logout
  logOut():void{
  let ref=this.dialog.open(AlertDialogComponent).afterClosed().subscribe(x=>{
    if(x=="true"){
      localStorage.clear();
      location.reload();
    }
  })
  }

}
