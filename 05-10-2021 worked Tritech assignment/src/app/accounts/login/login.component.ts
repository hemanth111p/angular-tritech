import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string
  onClick(){
    console.log(this.username)
  this.route.navigate(["excelhome/admindashboard"])
 // this.route.navigate(["/createEvent"])
    }

  constructor(public route:Router) {
    this.username="";
   }

  ngOnInit(): void {
  }

}
