import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

import { MatNativeDateModule } from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';

//MatNativeDateModule, MatMomentDateModule


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
