import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { EditMarkComponent } from '../edit-mark/edit-mark.component';
import { EditComponent } from '../edit/edit.component';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-view-mark',
  templateUrl: './view-mark.component.html',
  styleUrls: ['./view-mark.component.css']
})
export class ViewMarkComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer,private http:HttpCallsService,private dialog:MatDialog ) { }
  array:any[]=[]
  subjectArray:any[]=[]
  
  ngOnInit(): void {
  }

  getMark(event:any):void{
     var  regNo=event.target.value;
      this.array=[];
  this.http.getMarkByName({regNo:regNo}).subscribe(x=>{
    
    this.array=x.body.data
   console.log(this.array)
  },(err)=>{
    this.http.openSnakBar("Failed ! Something Went Wrong");
    console.log("http error")
  })}

viewAll():void{
       this.array=[];
  this.http.getAllMark().subscribe(x=>{
   if(x.status==200&&x.body.data){
    this.array=x.body.data
     console.log(this.array)
   }//if
   else
   this.http.openSnakBar("Failed ! Something Went Wrong");
  },(err)=>{
    this.http.openSnakBar("Failed ! Something Went Wrong");
    console.log("http error")
  })
}
edit(id:any):void{
var diaRef= this.dialog.open(EditMarkComponent,{data:{id:id}})

this.http.dialogRef=diaRef
diaRef.afterClosed().subscribe((x)=>{
 
  this.array=[]
})

}
delete(id:any):void{
  alert(id)

}
}
