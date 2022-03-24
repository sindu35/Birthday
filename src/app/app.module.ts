import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatDialog} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMatTimepickerModule,
    HttpClientModule,
    MdbModalModule,
    NgMultiSelectDropDownModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
