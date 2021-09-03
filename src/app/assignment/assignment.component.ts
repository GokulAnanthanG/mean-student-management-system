import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { HttpCallsService } from '../http-calls.service';
import {DomSanitizer}from '@angular/platform-browser'
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

fileName:any
file:any
assignmentArray:any[]=[]
  constructor(private http:HttpCallsService,private dialog:MatDialog,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getAllSignment()
   }

  fileChange(event:any):void{
this.file=event.target.files[0];
console.log(this.file)
this.fileName=this.file.name;
  }


  addAssigment(data:NgForm):void{
 if(data.valid){

this.dialog.open(AlertDialogComponent).afterClosed().subscribe(x=>{
  if(x=="true"){

var formData=new FormData();
formData.append('file',this.file)
formData.append('data',JSON.stringify(data.value))

this.http.addAssignment(formData).subscribe((x)=>{
 if(x.status==200&&x.body.data.insertedCount==1){
  this.http.openSnakBar("Assignment Added");
  data.resetForm();
this.fileName=''
 }
},(err)=>{
    this.http.openSnakBar("Failed ! Something Went Wrong");
})
 
  }
})
  
 }//if
 else{
this.http.openSnakBar("Fill All The Fields")
 }
  }


  getAllSignment():void{
    this.http.getAllAssignments().subscribe((x)=>{
this.assignmentArray=x.body.data
console.log(this.assignmentArray)
    },(err)=>{
      this.http.openSnakBar("Failed ! Something Went Wrong");
    })
  }
   
}
