import { Component, OnInit,Inject, ComponentFactoryResolver } from '@angular/core';
import { from } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { HttpCallsService } from '../http-calls.service';
import { NgForm } from '@angular/forms';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-edit-fees',
  templateUrl: './edit-fees.component.html',
  styleUrls: ['./edit-fees.component.css']
})
export class EditFeesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)private data:any,private http:HttpCallsService,private dialog:MatDialog) { }
detail:any
fees1:any
fees2:any
fees3:any
fees4:any
fees5:any
fees6:any
updatedDateDate:any
id:any
  ngOnInit(): void {
   
    this.http.getStudentById({id:this.data.id}).subscribe((x)=>{
      this.detail=x.body.data
this.fees1=x.body.data.sem1fees
this.fees2=x.body.data.sem2fees
this.fees3=x.body.data.sem3fees
this.fees4=x.body.data.sem4fees
this.fees5=x.body.data.sem5fees
this.fees6=x.body.data.sem6fees
this.updatedDateDate=x.body.data.feesEnteryUpdatedDay
this.id=x.body.data._id

    },(err)=>{
      console.log("http error")
    })
  }

  formSbmit(data:NgForm):void{
  var ref=  this.dialog.open(AlertDialogComponent);
   ref.afterClosed().subscribe((x)=>{
    if(x=="true"){
      this.http.updateFees(data.value).subscribe((x)=>{
        console.log(x)
      if(x.status==200&&x.body.data.modifiedCount==1){
        this.http.openSnakBar("Updated");
        this.http.dialogRef.close()
      }
      else{
        this.http.openSnakBar("Failed ! Something Went Wrong");
   
      }
      },(err)=>{
    this.http.openSnakBar("Failed ! Something Went Wrong");
      })
    }
  })
  }

}
