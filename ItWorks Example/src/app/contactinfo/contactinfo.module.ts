import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactinfoRoutingModule } from './contactinfo-routing.module';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactinfoRoutingModule
  ]
})
export class ContactinfoModule { }
