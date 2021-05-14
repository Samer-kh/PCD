import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IrisService} from './modules/employee-create/iris.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EmployeeEnterComponent } from './modules/employee-enter/employee-enter.component';
import {MatCardModule, MatDividerModule} from '@angular/material';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeEnterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    FormsModule

  ],
  providers: [IrisService,
              HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
