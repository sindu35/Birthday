import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/user/home/home.component';
import { NagivationComponent } from './components/user/nagivation/nagivation.component';
import { BookeventComponent } from './components/user/bookevent/bookevent.component';
import { ViewbookeventComponent } from './components/user/viewbookevent/viewbookevent.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { EditComponent } from './components/user/edit/edit.component';
import {MatDialog} from '@angular/material/dialog';
@NgModule({ 
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NagivationComponent,
    BookeventComponent,
    ViewbookeventComponent,
    LogoutComponent,
    EditComponent,
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule,
    MatFormFieldModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatInputModule ,
    HttpClientModule,
    MdbModalModule,

    

  ]
})
export class AuthModule { }
