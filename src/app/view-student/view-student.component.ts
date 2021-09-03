import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../http-calls.service';
import { DomSanitizer } from '@angular/platform-browser';
import {  MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
name:string=' ';
array:Array<any>=[]
safeData:any;
  constructor(private http:HttpCallsService,public sanitizer:DomSanitizer,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  getStudent():void{
    this.array=[];
this.http.getStudentByName({name:this.name}).subscribe(x=>{
console.log(x)
if(x.status==200&&x.body.data){
  this.array=x.body.data
 console.log(this.array)
}
},(err)=>{
  console.log("http error");
})
  }
  //edit
  edit(id:any):void{
  var dialogref=   this.dialog.open(EditComponent,{data:{id:id}});
this.http.dialogRef=dialogref;  
dialogref.afterClosed().subscribe((x)=>{
  this.array=[];
})
}
  delete(id:any):void{

var DeletedialogRef= this.dialog.open(AlertDialogComponent);
DeletedialogRef.afterClosed().subscribe((x)=>{
  if(x=="true"){

    this.http.deleteStudentById({id:id}).subscribe((x)=>{
      if(x.status==200&&x.body.data.deletedCount==1){
        this.array=[];
        this.http.openSnakBar("Record deleted");
      }
      else
      {
        this.http.openSnakBar("Failed ! Something Went Wrong");
      }
          },(err)=>{
            this.http.openSnakBar("Failed ! Something Went Wrong");
          })

  }//if
})//observe

  }


  viewAll():void{
     this.array=[];
    this.http.getAllStudent().subscribe((x)=>{
     if(x.status==200&&x.body.data){
      this.array=x.body.data;
     }//if
    },(err)=>{
      this.http.openSnakBar("Failed ! Something Went Wrong");
    })
    }

}
