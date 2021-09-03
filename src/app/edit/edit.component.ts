import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { HttpCallsService } from '../http-calls.service';
import {DomSanitizer} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  imageFile:any;
  //
studentData:any
imgUrl:any=""
name:any="";
fatherName:any=""
department:any=""
gender:any=""
dob:any=""
phoneNo :any=""
fatherNo:any=""
bloodGroup:any=""
email:any=""
address:any=""
pincode:any=""
city:any=""
regNo:any=""
joinedYear=""
id=""
  constructor( @Inject(MAT_DIALOG_DATA)private data:any,private http:HttpCallsService,public sanitizer: DomSanitizer,private dialog:MatDialog) { 
    
  }

  ngOnInit(): void {
this.http.getStudentById({id:this.data.id}).subscribe((x)=>{
if(x.status==200&&x.body.data){
 console.log(x.body.data)
this.studentData=x.body.data
this.imgUrl=x.body.data.StudentImage
this.name=x.body.data.name
this.department=x.body.data.department
this.fatherName=x.body.data.fatherName
this.gender=x.body.data.gender
this.dob=x.body.data.dob
this.phoneNo=x.body.data.phoneNo
this.fatherNo=x.body.data.fatherNo
this.bloodGroup=x.body.data.bloodGroup
this.email=x.body.data.email
this.address=x.body.data.address
this.pincode=x.body.data.pincode
this.city=x.body.data.city
this.regNo=x.body.data.regNo
this.joinedYear=x.body.data.joinedYear
this.id=x.body.data._id
}
else{
  this.http.openSnakBar("Failed ! Something Went Wrong");
}
},(error)=>{
  this.http.openSnakBar("Failed ! Something Went Wrong");
  })
     
  }
  fileSelect(event:any):void{
    console.log(event.target.files[0])
this.imageFile=event.target.files[0]
  }
  formSubmit(data:NgForm):void{

var AlerrtdialogRef=this.dialog.open(AlertDialogComponent);
AlerrtdialogRef.afterClosed().subscribe((x)=>{
  if(x=="true"){


    var formData=new FormData();
    formData.append('file',this.imageFile)
   formData.append('data',JSON.stringify(data.value))
   this.http.updateStudent(formData).subscribe((x)=>{
     console.log(x)
   if(x.status==200&&x.body.data.modifiedCount==1){
     this.http.openSnakBar(this.studentData.name+" Record Updated");
   this.http.dialogRef.close();
   }
   else{
     this.http.openSnakBar("Failed ! Something Went Wrong");

   }
   },(err)=>{
 this.http.openSnakBar("Failed ! Something Went Wrong");
   })

    
  }//if
})//alert dialog sub

    
  }

}
