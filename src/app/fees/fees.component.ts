import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFeesComponent } from '../edit-fees/edit-fees.component';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
 
  constructor(private http:HttpCallsService,private dialog:MatDialog) { }
array:any[]=[]
  ngOnInit(): void {
  }
  onKey(event:any):void{
    this.array=[]
    this.http.getStudent({regNo:event.target.value}).subscribe((x)=>{
if(x.status==200&&x.body.data){
this.array.push(x.body.data)
console.log(this.array)
console.log("//",x.body.data)
}
    },(err)=>{
      console.log("http error")
    })
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

edit(id:any):void{
 var ref=  this.dialog.open(EditFeesComponent,{data:{id:id}});
 this.http.dialogRef=ref;
 ref.afterClosed().subscribe((x)=>{
   this.array=[]
 })
}


}

