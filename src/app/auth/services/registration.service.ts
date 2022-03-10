import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  public registeruserfromremote(user: User):Observable<any>{
   return  this._http.post("http://localhost:8080/signup",user)
  }
}
