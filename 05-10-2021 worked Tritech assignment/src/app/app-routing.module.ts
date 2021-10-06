import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ExcelhomeComponent } from './excelhome/excelhome.component';
import { CreatemenuComponent } from './menu/createmenu/createmenu.component';
import {CreateEventComponent} from "../app/events/create-event/create-event.component"

const routes: Routes = [
  {path:"",redirectTo:'excelhome',pathMatch:'full'},

  {path:"excelhome",component:ExcelhomeComponent,children:[

     {path:"admindashboard",component:AdmindashboardComponent,children:[

           {path:"events",component:CreateEventComponent}
     ]},

    {path:"home",component:HomeComponent,children:[

      {path:"login",component:LoginComponent},

      {path:"signup",component:SignupComponent}
      
    ]}]},


   
 // {path:"createEvent",component:CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
