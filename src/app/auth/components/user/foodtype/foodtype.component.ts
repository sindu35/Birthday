import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodtype',
  templateUrl: './foodtype.component.html',
  styleUrls: ['./foodtype.component.css']
})
export class FoodtypeComponent implements OnInit {
  addons: { name: string; price: number; }[] | undefined;
 total:number=10000;
  constructor() { 
    
  }
  selected:number | undefined;
  
  ngOnInit(): void {
    this.addons = [
      {name:"Magic Show",price:2500 },
      {name:"Mehandi",price:2500 },
      {name:"DJ Party",price:2500 },
      {name:"Game Show",price:2500 },
    ];
  }
  
  getaddons(e:any,price:number){
    if(e.target.checked){
    this.total=this.total+price;
    console.log(this.total);
  }
  else{
    
      this.total=this.total-price;
    
  }
}
}
