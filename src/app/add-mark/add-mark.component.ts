import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent implements OnInit {
loop:any[]=[];
studentDetail:any;  
//
department=" "
name=" "  
regNo=" "
noOfSubject:any;
subjectNames:any;
constructor(private http:HttpCallsService,private dialog:MatDialog) { }

  ngOnInit(): void {
     
  }
fromSubmit(data:NgForm,data2:NgForm){
 var dialogRef=  this.dialog.open(AlertDialogComponent);
 dialogRef.afterClosed().subscribe(x=>{
console.log(x)
 if(x=='true'){
 var obj={
  noOfSubject:this.noOfSubject,
  regNo:data.value.regNo,
  studentName:data.value.StudentName,
  department:data.value.department,
  sem:data.value.semester,
  examType:data.value.examType,
  date:data.value.date,
  subjectNames:Object.values(this.subjectNames),
  mark:Object.values(data2.value),
}
this.http.addMark(obj).subscribe((x)=>{
  if(x.status=200&&x.body.data.insertedCount==1){
    this.http.openSnakBar(x.body.message);
    data.resetForm();
    data2.resetForm();
    this.loop=[]
  }
},(err)=>{
console.log("http err")
})
 
}//if ref

})//ref sub
}

onChange(event:any):void{
  this.loop=[];
for(var i=0;i<event.value;i++){
  console.log(i);
  this.loop.push(i)
  console.log(this.loop)
}
}


onKey(event:any):void{
  this.http.getStudent({regNo:event.target.value}).subscribe((x)=>{
    if(x.body.data){
      this.studentDetail=x.body.data;
      ///
      this.department=this.studentDetail.department
      this.name=this.studentDetail.name
      this.http.openSnakBar(x.body.data.name+" record found");
    }
 },(err)=>{
this.http.openSnakBar('Oops ! something went wrong') 
})

}

getSub(event:any):void{
  if(this.department==" "&&this.regNo==" "){
    this.http.openSnakBar("please enter the valid registation no")
  }
  else{
this.http.getSubject({department:this.department,sem:event.value}).subscribe((x)=>{
if(x.status==200){
  this.loop=[];
  this.noOfSubject=x.body.data.noOfSub;
 var array=Object.values(x.body.data.sub)  
 this.subjectNames=x.body.data.sub; 
 for(var i=0;i<x.body.data.noOfSub;i++){    
    this.loop.push(array[i])
   }
}
},(err)=>{
  console.log("http error")
  this.http.openSnakBar('Oops ! something went wrong') 
})
  }//else
 }

}
