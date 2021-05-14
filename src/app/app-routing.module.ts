import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeeCreateComponent } from './modules/employee-create/employee-create.component';
import { EmployeeEditComponent } from './modules/employee-edit/employee-edit.component';
import { PostsComponent } from './modules/posts/posts.component';
import {EmployeeEnterComponent} from './modules/employee-enter/employee-enter.component';


const routes: Routes = [{
  path : '' ,
  component : DefaultComponent,
  children : [{
    path: '' ,
    component: DashboardComponent
  }, {
  path: 'posts',
  component: PostsComponent
}
, { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'create-employee', component: EmployeeCreateComponent },
    { path: 'simulation', component: EmployeeEnterComponent }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
