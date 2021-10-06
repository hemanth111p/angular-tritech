import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-excelhome',
  templateUrl: './excelhome.component.html',
  styleUrls: ['./excelhome.component.css']
})
export class ExcelhomeComponent implements OnInit {

  constructor(private route:Router) { }
  onHomeClick()
  {
    this.route.navigate(["../home"]);
  }
  ngOnInit(): void {
  }

}
