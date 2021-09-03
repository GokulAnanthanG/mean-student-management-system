import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {
userDetail:any={
  name:":)",
  department:""
};
dialogRef:any///to close the dialog
  constructor(private http:HttpClient,private snak:MatSnackBar) { }
openSnakBar(mes:string):void{
  this.snak.open(mes,'X',{duration:3000});
}
addStudent(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/addStudent",obj,{observe:"response"});
}

addStaff(obj:any):Observable<any>{
   return this.http.post("http://localhost:3000/addStaff",obj,{observe:"response"})  
} 

getStudent(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getStudent",obj,{observe:"response"})
}

getSubject(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getSubject",obj,{observe:"response"})
}
AdLogin(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/adlogin",obj,{observe:"response"})
}
addMark(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/mark",obj,{observe:"response"})
}
getStudentByName(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getStudentByName",obj,{observe:"response"})
}
getStudentById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getStudentById",obj,{observe:"response"})
}
getStaffById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getStaffById",obj,{observe:"response"})
}
getStaffByName(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getStaffByName",obj,{observe:"response"})
}
getAllStudent( ):Observable<any>{
  return this.http.get("http://localhost:3000/getAllStudent",{observe:"response"})
}
getAllStaff( ):Observable<any>{
  return this.http.get("http://localhost:3000/getAllStaff",{observe:"response"})
}
getAllMessages( ):Observable<any>{
  return this.http.get("http://localhost:3000/getAllMessages",{observe:"response"})
}
updateStudent(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/updateStudent",obj,{observe:"response"})
}
updateStaff(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/updateStaff ",obj,{observe:"response"})
}
updateMark(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/updateMark ",obj,{observe:"response"})
}
deleteStudentById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/deleteStudentById ",obj,{observe:"response"})
}
deleteExamById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/deleteExam ",obj,{observe:"response"})
}
deleteCommentById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/deleteComment ",obj,{observe:"response"})
}
deleteMessageById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/deleteMessageById ",obj,{observe:"response"})
}
getMarkByName(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getMarkByName",obj,{observe:"response"})
}
getMarkById(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/getMarkById",obj,{observe:"response"})
}
getAllMark():Observable<any>{
  return this.http.get("http://localhost:3000/getAllMark",{observe:"response"})
}
addMessage(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/addMessage",obj,{observe:"response"})
}
addExam(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/addExam",obj,{observe:"response"})
}
getAllExams( ):Observable<any>{
  return this.http.get("http://localhost:3000/getAllExam",{observe:"response"})
}
protecter(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/pro",obj,{observe:"response"})
}
addComment(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/addComment",obj,{observe:"response"})
}
getAllComments( ):Observable<any>{
  return this.http.get("http://localhost:3000/getAllComments",{observe:"response"})
}
 
updateFees(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/updateFees",obj,{observe:"response"})
}
updateAdminPass(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/updateAdminPass",obj,{observe:"response"})
}
getToken():any{
  return localStorage.getItem('mSystemJwtKey');
}
addAssignment(obj:any):Observable<any>{
  return this.http.post("http://localhost:3000/addAssignment",obj,{observe:"response"})
}
getAllAssignments():Observable<any>{
  return this.http.get("http://localhost:3000/getAllAssignment",{observe:"response"})
}
getData():Observable<any>{
  return this.http.get("http://localhost:3000/data",{observe:"response"})
}
getStaffData():Observable<any>{
  return this.http.get("http://localhost:3000/staffData",{observe:"response"})
}
getStudentsGenderData():Observable<any>{
  return this.http.get("http://localhost:3000/studentData",{observe:"response"})
}
}
 