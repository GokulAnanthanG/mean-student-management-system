import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMarkComponent } from './add-mark/add-mark.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FeesComponent } from './fees/fees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
import { ViewMarkComponent } from './view-mark/view-mark.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path:' ',
    component:HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'addStudent',
    component:AddStudentComponent
  },{
    path:'viewStudent',
    component:ViewStudentComponent
  },
   {
    path:'addStaff',
    component:AddStaffComponent
  },{
    path:'viewStaff',
    component:ViewStaffComponent
  }
  ,{
    path:'addNews',
    component:AddNewsComponent
  },
  {
    path:'setting',
    component:SettingComponent
  }
  ,{
    path:'AdLogin',
    component:LoginComponent
  }
  ,{
    path:'addMark',
    component:AddMarkComponent
  },
  {
    path:'viewMark',
    component:ViewMarkComponent
  },
  {
    path:'fees',
    component:FeesComponent
  },
  {
    path:'assignment',
    component:AssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
