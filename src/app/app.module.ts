import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { AddMarkComponent } from './add-mark/add-mark.component';
import {HttpClientModule} from '@angular/common/http';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { EditComponent } from './edit/edit.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { ViewMarkComponent } from './view-mark/view-mark.component';
import { EditMarkComponent } from './edit-mark/edit-mark.component';
import { FeesComponent } from './fees/fees.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { AssignmentComponent } from './assignment/assignment.component';
//
 import {ChartModule, CategoryService, LegendService, TooltipService ,LineSeriesService,AccumulationChartModule,PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService} from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddStudentComponent,
    ViewStudentComponent,
    AddNewsComponent,
    AddStaffComponent,
    ViewStaffComponent,
    SettingComponent,
    LoginComponent,
    AddMarkComponent,
    AlertDialogComponent,
    EditComponent,
    EditStaffComponent,
    ViewMarkComponent,
    EditMarkComponent,
    FeesComponent,
    EditFeesComponent,
    AssignmentComponent,
  ],
  imports: [
    AccumulationChartModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
     
  ],
  providers: [PieSeriesService,TooltipService,LegendService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService,LineSeriesService,CategoryService],
  entryComponents:[AlertDialogComponent,EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
