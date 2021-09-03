import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { EditStaffComponent } from '../edit-staff/edit-staff.component';
import { EditComponent } from '../edit/edit.component';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

     name:string=' ';
    array:Array<any>=[]
    safeData:any;
      constructor(private http:HttpCallsService,public sanitizer:DomSanitizer,private dialog:MatDialog) { }
      ngOnInit(): void {
      }
      getStaff():void{
        this.array=[];
    this.http.getStaffByName({name:this.name}).subscribe(x=>{
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
    var dialogref=   this.dialog.open(EditStaffComponent,{data:{id:id}});
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
        this.http.getAllStaff().subscribe((x)=>{
         if(x.status==200&&x.body.data){
          this.array=x.body.data;
         }//if
        },(err)=>{
          this.http.openSnakBar("Failed ! Something Went Wrong");
        })
        }


    }
    
