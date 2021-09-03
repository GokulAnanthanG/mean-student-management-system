import { Component, Inject, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { HttpCallsService } from '../http-calls.service';
import { NgForm } from '@angular/forms';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
 
@Component({
  selector: 'app-edit-mark',
  templateUrl: './edit-mark.component.html',
  styleUrls: ['./edit-mark.component.css']
})
export class EditMarkComponent implements OnInit {
mark:any;
subject1mark:any
subject2mark:any
subject3mark:any
subject4mark:any
subject5mark:any
subject6mark:any
subject7mark:any
subject8mark:any

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private http:HttpCallsService,private dialog:MatDialog) { }

  ngOnInit(): void {
     this.http.getMarkById({id:this.data.id}).subscribe((x)=>{
       if(x.status==200&&x.body.data){
         this.mark=x.body.data;
         this.subject1mark=this.mark.mark[0]
         this.subject2mark=this.mark.mark[1]
         this.subject3mark=this.mark.mark[2]
         this.subject4mark=this.mark.mark[3]
         this.subject5mark=this.mark.mark[4]
         this.subject6mark=this.mark.mark[5]
         this.subject7mark=this.mark.mark[6]
         this.subject8mark=this.mark.mark[7]
       }
       console.log(x)
     })
  }
  formSubmit(data:NgForm):void{
     var dialogRef= this.dialog.open(AlertDialogComponent)
     dialogRef.afterClosed().subscribe((x)=>{
       if(x=="true"){
         var obj={
           id: this.mark._id,
           mark:Object.values(data.value)
         }
     
this.http.updateMark(obj).subscribe((x)=>{
 if(x.status==200&&x.body.data.modifiedCount==1){
  this.http.openSnakBar(`${this.mark.studentName} ${this.mark.department} ${this.mark.sem} ${this.mark.examType} mark ${this.mark.date} updated`);
this.http.dialogRef.close();
}else{
  this.http.openSnakBar("Failed ! Something Went Wrong");
 }
},(err)=>{  this.http.openSnakBar("Failed ! Something Went Wrong");
})
       }//if
     })
  }

}
