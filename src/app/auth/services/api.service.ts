import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpClient: any;
  constructor(private http:HttpClient) { }
 
  bookevent(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  Viewevent()
    {
      return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    updateevent(data:any,id:number){
      return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))

    }
    deleteevent(id:number){
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    viewtheme()
    {
      return this.http.get<any>("http://localhost:3000/theme")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    addon(){
      return this.http.get<any>("http://localhost:3000/addons")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    veg()
    {
      return this.http.get<any>("http://localhost:3000/veg")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    nonveg()
    {
      return this.http.get<any>("http://localhost:3000/nonveg")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    

}
