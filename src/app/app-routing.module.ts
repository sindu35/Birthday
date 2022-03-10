import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BookeventComponent } from './auth/components/user/bookevent/bookevent.component';
import { FoodtypeComponent } from './auth/components/user/foodtype/foodtype.component';
import { HomeComponent } from './auth/components/user/home/home.component';
import { LogoutComponent } from './auth/components/user/logout/logout.component';
import { ViewbookeventComponent } from './auth/components/user/viewbookevent/viewbookevent.component';

const routes: Routes = [
  {path:'user/login',component:LoginComponent},
 
{path:'',component:SignupComponent},
{path:'user/signup',redirectTo:'',component:SignupComponent,pathMatch:'full'},
{path:'admin/signup',redirectTo:'',component:SignupComponent,pathMatch:'full'},
{path:'user/getAllThemes',component:HomeComponent},
  {path:'user/bookTheme',component:BookeventComponent},
  {path:'user/getBookedTheme',component:ViewbookeventComponent},
  {path:'user/logout',component:LoginComponent},
  
  {path:'2',component:FoodtypeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
