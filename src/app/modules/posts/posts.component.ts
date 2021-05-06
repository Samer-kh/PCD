import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../api/rest-api.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

 
  
  Employee: any = [];

  page = 1;
  pageSize = 4;
  collectionSize = this.Employee.length;
  
  constructor( public restApi: RestApiService) { }

  ngOnInit() {
    this.loadEmployees();
  }
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees();
      });
    }
  }
  deleteAllEmployee() {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.loadEmployees()
      for (var emp of this.Employee) {
      this.restApi.deleteEmployee(emp.id).subscribe(data => {
        this.loadEmployees();
      });
    }
   
  }
  }
}
