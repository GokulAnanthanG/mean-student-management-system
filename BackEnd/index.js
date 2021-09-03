//dependencys
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors=require("cors")
  //local Moduels
const add_student=require('./endPoints/addStudent');
const add_staff=require('./endPoints/addStaff');
const get_student=require('./endPoints/getStudent')
const ad_login=require('./endPoints/login');
const get_subject=require('./endPoints/getSubject');
const perotecter=require('./endPoints/protecter')
const ad_Mark=require('./endPoints/addMark')
const getStudent_ByName=require('./endPoints/getStudentByName')
const getStaff_ByName=require('./endPoints/getStaffByName')
const get_allStudnet=require('./endPoints/viewAllStudent')
const get_allStaff=require('./endPoints/viewAllStaff')
const getStudent_ById=require('./endPoints/getStudentById')
const getStaff_ById=require('./endPoints/getStaffById')
const update_student=require('./endPoints/updateStudent')
const update_staff=require('./endPoints/updateStaff')
const deleteStudent_ById=require('./endPoints/deleteStudentById')
const deleteMessage_ById=require('./endPoints/deleteMessage')
const getMark_ByName=require('./endPoints/getMark')
const getAll_Mark=require('./endPoints/getAllMark')
const getMark_ById=require('./endPoints/getPaticularMarkById')
const update_mark=require('./endPoints/updateMark')
const add_Message=require('./endPoints/addMessage')
const add_exam=require('./endPoints/addExam')
const get_allMessage=require('./endPoints/getAllMessages')
const get_allExams=require('./endPoints/getAllExam')
const delete_exam=require('./endPoints/deleteExam')
const add_comment=require('./endPoints/addComments')
const get_allComments=require('./endPoints/getAllComment')
const delete_comment=require('./endPoints/deleteComment')
const update_fees=require('./endPoints/updateFees')
const update_adminPass=require('./endPoints/updateAdmin')
const add_assignment=require('./endPoints/addAssignment')
const getAllAssignment=require('./endPoints/getAllAssignment');
//
const data=require('./endPoints/data')
const staffdata=require('./endPoints/staffData')
const studentData=require('./endPoints/studentDataByGender')
//student
const stPro=require('./endPoints/studentProtecter');
const studentLogin=require('./endPoints/studentLogin');
const getAllAssignment_byDepartment=require('./endPoints/getallAssignmentBYDepartmen');
//
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use('/profile',express.static('uploads'));
 
//routes
app.get('/',(req,res)=>{
    res.send("hello from server ;)");
})
app.use("/addStudent",add_student);
app.use("/addStaff",add_staff);
app.use("/getStudent",get_student);
app.use("/adlogin",ad_login);
app.use("/getSubject",get_subject);
app.use("/pro",perotecter);
app.use("/mark",ad_Mark);
app.use("/getStudentByName",getStudent_ByName);
app.use("/getStaffByName",getStaff_ByName);
app.use("/getAllStudent",get_allStudnet);
app.use("/getAllStaff",get_allStaff);
app.use("/getStudentById",getStudent_ById);
app.use("/getStaffById",getStaff_ById );
app.use("/updateStudent",update_student);
app.use("/updateStaff",update_staff);
app.use("/deleteStudentById",deleteStudent_ById);
app.use("/deleteMessageById",deleteMessage_ById);
app.use("/getMarkByName",getMark_ByName);
app.use("/getAllMark",getAll_Mark);
app.use("/getMarkById",getMark_ById);
app.use("/updateMark",update_mark);
app.use("/addMessage",add_Message);
app.use("/addExam",add_exam);
app.use("/getAllMessages",get_allMessage);
app.use("/getAllExam",get_allExams);
app.use("/deleteExam",delete_exam);
app.use("/addComment",add_comment);
app.use("/getAllComments",get_allComments);
app.use("/deleteComment",delete_comment);
app.use("/updateFees",update_fees);
app.use("/updateAdminPass",update_adminPass);
app.use("/addAssignment",add_assignment);
app.use("/getAllAssignment",getAllAssignment)
//
app.use("/data",data)
app.use("/staffData",staffdata)
app.use("/studentData",studentData)

//
app.use("/studentPro",stPro)
app.use("/studentLogin",studentLogin)
app.use("/getStudentAssignment",getAllAssignment_byDepartment)

 //
app.listen(3000, () => {
    console.log("Server Running on 3000...");
})