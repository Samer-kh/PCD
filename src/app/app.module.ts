import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IrisService} from './modules/employee-create/iris.service';
import {HttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    FlexLayoutModule,

  ],
  providers: [IrisService,
  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
