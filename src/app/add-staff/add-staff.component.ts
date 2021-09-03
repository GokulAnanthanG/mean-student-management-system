import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
hiddeBox=true;
image:any;
fileName:string="Choose Staff Image";
  constructor(private http:HttpCallsService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  imgUpload(event:any):void{
this.image=event.target.files[0];
this.fileName=this.image.name

  }
  fromSubmit(data:NgForm):void {
    var dialogRef=  this.dialog.open(AlertDialogComponent);
 dialogRef.afterClosed().subscribe(x=>{
  if(x=='true'){
var formData=new FormData();
formData.append('file',this.image);
formData.append('data',JSON.stringify(data.value))
this.http.addStaff(formData).subscribe((x)=>{
  console.log(x)
if(x.status=200&&x.body.data.insertedCount==1){
  this.http.openSnakBar("staff inserted");
  data.resetForm();
}
else{
  this.http.openSnakBar("Failed ! Something Went Wrong");
}
},(err)=>{
  this.http.openSnakBar("Failed ! Something Went Wrong");
})

}//if ref

})//ref sub

  }
  onChange(event:any):void{
if(event.value!="Teaching Staff"){
  this.hiddeBox=false;
} else this.hiddeBox=true; }


}
