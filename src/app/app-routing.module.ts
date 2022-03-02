import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BookeventComponent } from './auth/components/user/bookevent/bookevent.component';
import { HomeComponent } from './auth/components/user/home/home.component';
import { LogoutComponent } from './auth/components/user/logout/logout.component';
import { ViewbookeventComponent } from './auth/components/user/viewbookevent/viewbookevent.component';

const routes: Routes = [
  {path:'user/login',component:LoginComponent},
 
{path:'',component:SignupComponent},
{path:'user/signup',redirectTo:'',component:SignupComponent,pathMatch:'full'},
{path:'admin/signup',redirectTo:'',component:SignupComponent,pathMatch:'full'},
{path:'home',component:HomeComponent},
  {path:'bookevent',component:BookeventComponent},
  {path:'viewbookevent',component:ViewbookeventComponent},
  {path:'logout',component:LogoutComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
