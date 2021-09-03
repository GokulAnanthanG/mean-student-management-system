import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { HttpCallsService } from '../http-calls.service';
 @Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private http:HttpCallsService,private dialog:MatDialog) { }
  obj:any;
  image:any;
  fileName:string="Choose Student Image"
   ngOnInit(): void {
  }

  imageSelect(event:any):void{
 this.image= event.target.files[0] 
this.fileName=this.image.name
}
  fromSubmit(data:NgForm):void{
    var dialogRef=  this.dialog.open(AlertDialogComponent);
    dialogRef.afterClosed().subscribe(x=>{
     if(x=='true'){
     var formData=new FormData();
    formData.append('data',JSON.stringify(data.value));
    formData.append('file',this.image);
    this.http.addStudent(formData).subscribe((x)=>{
  if(x.status==200&&x.body.data.insertedCount==1){
    this.http.openSnakBar(x.body.message)
    data.resetForm();
  }
  else{
    this.http.openSnakBar("Failed ! Something Went Wrong");
  }
},(error)=>{
  this.http.openSnakBar("Failed ! Something Went Wrong");
 })

}//if ref

})//ref sub

  }

}
