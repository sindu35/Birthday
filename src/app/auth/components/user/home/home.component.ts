import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { windowToggle } from 'rxjs';
import { ApiService } from 'src/app/auth/services/api.service';


class card{
  id:number;
  img:string = "";
  title:string = "";
  address:string = "";
  constructor( id:number, img:string, title:string, address:string){
    this.id = id;
    this.img = img;
    this.title = title;
    this.address = address;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  HomeForm !: FormGroup
msg:string='';
  cardlist: card[] = [];
  displaylist: card[] = [];
  constructor(public router:Router,private api:ApiService){}

  ngOnInit(): void {

    this.themes();

  }

  search():void {
    this.cardlist = [];
    var searchuiInput:string = ((<HTMLInputElement>document.getElementById("Search")).value).toString();
    for(var i=0;i<this.displaylist.length;i++){
      if(this.displaylist[i].title.toLowerCase().match(searchuiInput.toLowerCase())){
        this.cardlist.push(this.displaylist[i]);
 
       
      }
      else{
        this.msg="NO RESULTS FOUND";
      }
      
      
    }
   

  } 

  book():void{
    this.router.navigate(['/user/bookTheme']);
  }



  themes(){
    return this.api.viewtheme().subscribe(res => {
      this.cardlist = res;
      this.displaylist = res;
      
    }).unsubscribe
  }


}

