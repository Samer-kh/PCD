import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';
import { RestApiService } from '../../../api/rest-api.service';

let n : number =0;
var variable : number;
var variable2 : number;
var PresenceRate : number ;
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})

export class AreaComponent implements OnInit {
  Highcharts = Highcharts;
  
  EmployeeNumber : number ;
 EntranceNumber : number  ;
  Entrance: any = [];
  Employee : any = [];
  chartOptions = {}

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadEntrance();
    this.loadEmployee();
    
    this.numberEntrance();
    this.numberEmployee();
    console.log(this.EntranceNumber + 'samer')
    
    PresenceRate = this.EntranceNumber/this.EmployeeNumber
    console.log(PresenceRate+'hama')
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Workers Presence Rate '
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Present',
              y:80,
              sliced: true,
              selected: true
          }, {
              name: 'Absent',
              y: 20
          }]
      }]
  };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);


  }
  loadEntrance() {
    return this.restApi.getEntrance().subscribe((data: {}) => {
      this.Entrance = data;
    });
  }
  numberEntrance()  {
    
   this.restApi.getEntrance().subscribe((data: {}) => {
      this.Entrance = data;
      n=this.Entrance.length
     console.log(n+ 'entrance')

    });

    this.EntranceNumber=n
  }
  loadEmployee() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
  numberEmployee()  {
    this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
      this.EmployeeNumber=this.Employee.length
     console.log(this.EmployeeNumber + ' employee')
      
    
    });
  }
 
}
