import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpCallsService } from '../http-calls.service';
import {  DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  message:string=" "
  file:any;
  fileName:string="Choose Image For Post";
  array:any[]=[]
  allExams:any[]=[];
  allComments:any[]=[];
  comment:string="";
   

  constructor(private http:HttpCallsService,public sanitizer:DomSanitizer,private dialog:MatDialog) { }

  ngOnInit(): void {
     //get All Messages
    this.http.getAllMessages().subscribe((x)=>{
     if(x.status==200&&x.body.data){
       this.array=x.body.data
     }
     else{
      this.http.openSnakBar('Oops ! something went wrong') 
     }
    },(err)=>{
      this.http.openSnakBar('Oops ! something went wrong') 
      console.log("http error")
    })
    //
    //get all exams
this.http.getAllExams().subscribe((x)=>{
if(x.status==200&&x.body.data){
  this.allExams=x.body.data
}
else{
  this.http.openSnakBar('Oops ! something went wrong') 

}
},(err)=>{
  this.http.openSnakBar('Oops ! something went wrong') 

})
    //
    //get all comments

    this.http.getAllComments().subscribe((x)=>{
      if(x.status==200&&x.body.data){
        this.allComments=x.body.data
      }
      else{
       this.http.openSnakBar('Oops ! something went wrong') 
      }
     },(err)=>{
       this.http.openSnakBar('Oops ! something went wrong') 
       console.log("http error")
     })
    //
  }
fileChanged(event:any):void{
this.file=event.target.files[0];
this.fileName=this.file.name;

  }
 addMessage(data:NgForm):void{
   if(this.message.length>1&&this.file){
    var formData=new FormData();
    formData.append('file',this.file);
    formData.append('data',JSON.stringify(this.message));
    this.http.addMessage(formData).subscribe((x)=>{
     if(x.status==200&&x.body.data.insertedCount==1){
       data.resetForm();
       this.fileName=" "
    this.http.openSnakBar("Message Added");
     //get All Messages
     this.http.getAllMessages().subscribe((x)=>{
      if(x.status==200&&x.body.data){
        this.array=x.body.data
      }
      else{
       this.http.openSnakBar('Oops ! something went wrong') 
      }
     },(err)=>{
       this.http.openSnakBar('Oops ! something went wrong') 
       console.log("http error")
     })
     //
     }else{
      this.http.openSnakBar('Oops ! something went wrong') 
     }
    },(err)=>{
      this.http.openSnakBar('Oops ! something went wrong')  
    })
  }
  else{
    this.http.openSnakBar("Empty Messages Not Allowed !");
  }
 }


 deleteMessage(id:any):void{
var ref=  this.dialog.open(AlertDialogComponent);
ref.afterClosed().subscribe(x=>{
  if(x=="true"){

    this.http.deleteMessageById({id:id}).subscribe((x)=>{
      if(x.status==200&&x.body.data.deletedCount==1){
        this.http.openSnakBar('Message Deleted') 
          //get All Messages
    this.http.getAllMessages().subscribe((x)=>{
      if(x.status==200&&x.body.data){
        this.array=x.body.data
      }
      else{
       this.http.openSnakBar('Oops ! something went wrong') 
      }
     },(err)=>{
       this.http.openSnakBar('Oops ! something went wrong') 
       console.log("http error")
     })
     //
      }else{
        this.http.openSnakBar('Oops ! something went wrong') 
      }
       },(err)=>{
         console.log("Http error");
         this.http.openSnakBar('Oops ! something went wrong') 
      
       })


  }
})
 }
 addExam(data:NgForm):void{
   var ref=this.dialog.open(AlertDialogComponent);
   ref.afterClosed().subscribe((x)=>{

if(x=="true"){
  this.http.addExam(data.value).subscribe((x)=>{
    if(x.status==200&&x.body.data.insertedCount==1){
      console.log(x.body.data);
      this.http.openSnakBar('Exam Added') 
      data.resetForm();
       //get all exams
this.http.getAllExams().subscribe((x)=>{
  if(x.status==200&&x.body.data){
    this.allExams=x.body.data
  }
  else{
    this.http.openSnakBar('Oops ! something went wrong') 
  
  }
  },(err)=>{
    this.http.openSnakBar('Oops ! something went wrong') 

  })
      //
    }
        },(err)=>{
          console.log("http error");
          this.http.openSnakBar('Oops ! something went wrong') 
        })
     }


   })

  }

  deleteExam(id:any):void{
var ref=this.dialog.open(AlertDialogComponent);
ref.afterClosed().subscribe((x)=>{
  if(x=="true"){

this.http.deleteExamById({id:id}).subscribe((x)=>{
if(x.status==200&&x.body.data.deletedCount==1){
  this.http.openSnakBar('Exam Deleted');
   //get all exams
this.http.getAllExams().subscribe((x)=>{
  if(x.status==200&&x.body.data){
    this.allExams=x.body.data
  }
  else{
    this.http.openSnakBar('Oops ! something went wrong') 
  
  }
  },(err)=>{
    this.http.openSnakBar('Oops ! something went wrong') 
  
  })
      //
 }
},(err)=>{
  this.http.openSnakBar('Oops ! something went wrong') 
})

  }
})
  }


  addComment():void{
    var obj={
comment:this.comment,
position:'admin',
department:' ',
name:this.http.userDetail.name,
time:new Date()
    }
    if(this.comment.length>1){
    this.http.addComment(obj).subscribe((x)=>{
      if(x.status==200&&x.body.data.insertedCount==1){
        this.http.openSnakBar('Comment Added');
        this.comment=" "
         //get all comments

    this.http.getAllComments().subscribe((x)=>{
      if(x.status==200&&x.body.data){
        this.allComments=x.body.data
      }
      else{
       this.http.openSnakBar('Oops ! something went wrong') 
      }
     },(err)=>{
       this.http.openSnakBar('Oops ! something went wrong') 
       console.log("http error")
     })
    //
      }
      },(err)=>{
      console.log("http error");
      this.http.openSnakBar('Oops ! something went wrong') 
    })
  }
else{
  this.http.openSnakBar('Empty Messages Not Allowed') 
}

}

deleteComment(id:any):void{
var ref=this.dialog.open(AlertDialogComponent);
ref.afterClosed().subscribe((x)=>{
  if(x=="true"){
    this.http.deleteCommentById({id:id}).subscribe((x)=>{
      if(x.status==200&&x.body.data.deletedCount==1){
         //get all comments
    
         this.http.getAllComments().subscribe((x)=>{
          if(x.status==200&&x.body.data){
            this.allComments=x.body.data
          }
          else{
           this.http.openSnakBar('Oops ! something went wrong') 
          }
         },(err)=>{
           this.http.openSnakBar('Oops ! something went wrong') 
           console.log("http error")
         })
        //
        this.http.openSnakBar('Comment Deleted') 
      }
    },(err)=>{
      this.http.openSnakBar('Oops ! something went wrong') 
    })
  }
})
}
find(data:string):string{
  if(data==" "){
   
    return 'Staff'
  }
  else{
    

  return data
  }
}

}
