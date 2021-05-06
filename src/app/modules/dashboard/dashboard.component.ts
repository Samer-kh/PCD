import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../../api/rest-api.service';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
 
  Entrance: any = [];
  Employee : any = [];
  constructor(public restApi: RestApiService ,private calendar: NgbCalendar) { }
  today = this.calendar.getToday();
  model: NgbDateStruct = this.today;
  StringModal : string 
  @Input('ngModel')
  ngOnInit() {
    console.log(this.model)
    this.loadEmployee();
   this. StringModal = this.model.year + '-' +this.model.month+'-' +this.model.day;
   this.loadEntrance();
  }
  onChange(UpdatedValue : NgbDateStruct) :void
  {
    this.model = UpdatedValue;
    console.log(this.model)
    this. StringModal = this.model.year + '-' +this.model.month+'-' +this.model.day;
    this.loadEntrance();
  }
  loadEntrance() {
    return this.restApi.getEntranceByDate(this.StringModal).subscribe((data: {}) => {
      this.Entrance = data;
    });
  }
  loadEmployee() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
 
}
