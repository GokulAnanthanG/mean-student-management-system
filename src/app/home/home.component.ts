import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Chart} from 'node_modules/chart.js'
import { HttpCallsService } from '../http-calls.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  gender:any
  lineData:any
  primaryXAxis:any//
  legendSettings:any
  titleLine:any
  tooltip:any

  chart1Titile:string=''
  chart2Titile:string=''
chartLabel:object;
tooltipSetting:object;

   constructor(private http:HttpCallsService) { 
    this.tooltip = {
      enable: true
  }
    this.legendSettings = {
      visible: true
  }
  this.titleLine = 'Student Strength Department wise';

 
this.primaryXAxis = {
  valueType: 'Category'
};
this.chart1Titile="Student Population"
this.chart2Titile="Staff Population"

     
this.chartLabel={
  visible:true,
  position:'Inside',name:'text'
}
 this.tooltipSetting={
   enable:true,
  }
  }
  ngOnInit(): void {
  
     this.http.getData().subscribe((x)=>{
       console.log(x.body)
this.lineData=x.body
     },(err)=>{
       console.log("http error")
     })

//

this.http.getStaffData().subscribe((x)=>{
  console.log(x.body)
this.data=x.body
},(err)=>{
  console.log("http error")
})
//

this.http.getStudentsGenderData().subscribe((x)=>{
  console.log(x.body)
this.gender=x.body
},(err)=>{
  console.log("http error")
})

}



}
