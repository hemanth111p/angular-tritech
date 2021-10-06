import {HttpClient} from '@angular/common/http'; 
import {Injectable,Inject} from '@angular/core';
import {DataModel} from '../menu/models/dataModels.model'
import {HttpHeaders} from '@angular/common/http';
import {EventModel} from "../events/eventContainer/models/eventmodel.module"

@Injectable()
export class SectionInfoControllerService{
    constructor(public http:HttpClient,@Inject("SectionInfoAPIUrl") public baseUrl:string){
    
    }
    createNewSectionInfo(data:any)
    {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
       return this.http.post<EventModel>(this.baseUrl, data, httpOptions);
    }
}