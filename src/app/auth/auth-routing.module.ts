import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookeventComponent } from './components/user/bookevent/bookevent.component';
import { FoodtypeComponent } from './components/user/foodtype/foodtype.component';
import { HomeComponent } from './components/user/home/home.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { ViewbookeventComponent } from './components/user/viewbookevent/viewbookevent.component';
const routes: Routes = [
  {path:'user/login',component:LoginComponent},
  {path:'',component:SignupComponent},
  {path:'user/signup',redirectTo:'',component:SignupComponent,pathMatch:'full'},
  {path:'user/getAllThemes',component:HomeComponent},
  {path:'user/bookTheme',component:BookeventComponent},
  {path:'user/getBookedTheme',component:ViewbookeventComponent},
  {path:'user/logout',component:LoginComponent},
  
  {path:'2',component:FoodtypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
