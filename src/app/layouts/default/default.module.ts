import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButton, MatButtonModule, MatCardModule, MatDatepickerModule, MatDatepickerToggle, MatDividerModule, MatFormFieldControl, MatFormFieldModule, MatInputModule, MatLabel, MatNativeDateModule, MatPaginatorModule, MatSidenavModule, MatTableModule, _MatMenuDirectivesModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { BrowserModule } from "@angular/platform-browser";

import { DataTablesModule } from "angular-datatables";
import { EmployeeEditComponent } from 'src/app/modules/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from 'src/app/modules/employee-create/employee-create.component';
import { NgbDatepicker, NgbDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    HttpClientModule,
    _MatMenuDirectivesModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),
    BrowserModule,
     DataTablesModule,
     MatButtonModule,
     NgbModule,  
    FormsModule,
     ReactiveFormsModule
     
  
    

    
   



  ],
  exports: [ MatFormFieldModule, MatInputModule ]
})
export class DefaultModule { }
