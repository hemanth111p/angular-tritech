import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormsModule} from '@angular/forms';
import { DataModel } from '../models/dataModels.model';
import {SectionInfoControllerService} from '../../services/sectionInfoController.service'

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})
export class CreatemenuComponent implements OnInit {
  Title : string;
  Contents : string;

  constructor(public apiService:SectionInfoControllerService) { 
      this.Title="";
      this.Contents="";
     }

  onTitleEdit( titlevalue:string):void{
    this.Title = titlevalue;
}
oncontentsEdit( datevalue:string):void{
  this.Contents = datevalue;
}

onSubmit(data:any){
  console.log(this.Title,this.Contents);
  console.log(data);
  this.apiService.createNewSectionInfo(data).subscribe(response=>console.log('success'));
  }

  onClear(){
  
      this.Title="";
      this.Contents="";
    
  }
  ngOnInit(): void {
  }

  DaTadetails = new FormControl('');
  
  
  detailsform =new FormGroup({
    title:new FormControl('',Validators.required),
    contents:new FormControl('',Validators.required),
   
  });
  
  
 

    get title(){return this.detailsform.get('title')}

   
   get contents() {
     return this.detailsform.get('contents');
   }
  


// onSubmit()
  // {
  //   console.log(this.detailsform.value);
    
  // }
  // clearForm()
  // {
  //   this.detailsform.reset();
  // }

  }
  
