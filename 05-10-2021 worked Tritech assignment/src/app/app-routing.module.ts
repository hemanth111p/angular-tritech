import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../accounts/login/login.component';
import { SignupComponent } from '../accounts/signup/signup.component';


const routes: Routes = [
  //(path:"home",component:)
  {path:"home",component:HomeComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }