import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../classes/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl=""
  httpClient: any;
  constructor(private http:HttpClient) { }
  getEventsList() : Observable<Events[]>{
    return this.httpClient.get(`${this.baseUrl}`); 
    
  }
}
