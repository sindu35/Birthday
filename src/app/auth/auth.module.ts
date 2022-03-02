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
import{MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NagivationComponent,
    BookeventComponent,
    ViewbookeventComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class AuthModule { }
