import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookeventComponent } from './components/user/bookevent/bookevent.component';
import { HomeComponent } from './components/user/home/home.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { ViewbookeventComponent } from './components/user/viewbookevent/viewbookevent.component';
const routes: Routes = [
  {path:'user/login',component:LoginComponent},
  {path:'',component:SignupComponent},
  {path:'user/signup',redirectTo:'',component:SignupComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bookevent',component:BookeventComponent},
  {path:'viewbookevent',component:ViewbookeventComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
