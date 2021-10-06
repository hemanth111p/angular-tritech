import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{SectionInfoControllerService} from "../app/services/sectionInfoController.service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AccountsModule} from './accounts/accounts.module';
import {FormsModule} from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ExcelhomeComponent } from './excelhome/excelhome.component';
import { FooterComponent } from './footer/footer.component'
import { MenuModule } from './menu/menu.module';

import {EventsModule} from "../app/events/events.module"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmindashboardComponent,
    ExcelhomeComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,
    FormsModule,
    MenuModule,EventsModule
  ],
  providers: [
    {provide:SectionInfoControllerService,useClass:SectionInfoControllerService},
      {provide:"SectionInfoAPIUrl",useValue:"http://localhost:5000/api/SectionInfo"}
  ],
  bootstrap: [AppComponent,FooterComponent]
})
export class AppModule { }
