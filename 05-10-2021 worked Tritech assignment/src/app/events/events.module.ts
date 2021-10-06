import {NgModule} from "@angular/core"
import {EventImageComponent} from "./eventImage/eventImage.component"
import {ItemListComponent} from "./itemList/itemList.component"
import {ProgramItemComponent} from "./programItem/programItem.component";
import {EventItemComponent} from "./eventContainer/eventItem/eventItem.component"
import {EventListComponent} from "./eventContainer/eventList/eventList.component"
import { CreateEventComponent } from './create-event/create-event.component'
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common"
import {ReactiveFormsModule} from '@angular/forms';




//declaration
@NgModule({
    declarations:[EventImageComponent,ItemListComponent,ProgramItemComponent, CreateEventComponent,EventItemComponent,EventListComponent],
    imports:[FormsModule,HttpClientModule,CommonModule,ReactiveFormsModule],
    bootstrap:[],
    exports:[ItemListComponent,EventImageComponent,CreateEventComponent,EventListComponent]
})
export class EventsModule{    

}