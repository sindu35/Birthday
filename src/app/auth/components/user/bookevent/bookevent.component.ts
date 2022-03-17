import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Events } from 'src/app/auth/classes/events';
import { ApiService } from 'src/app/auth/services/api.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


class addons{
 name:string='';
 price:number=0;
  constructor( name:string,price:number){
   this.name=name;
   this.price=price;
  }
}

class veg{
  name:string='';
  price:number=0;
  constructor( name:string,price:number){
    this.name=name;
    this.price=price;
   }

}
class nonveg{
  name:string='';
  price:number=0;
  constructor( name:string,price:number){
    this.name=name;
    this.price=price;
   }

}
@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styleUrls: ['./bookevent.component.css']
})
export class BookeventComponent implements OnInit {

  formValue !: FormGroup
  ei:Events =new Events();
 

  constructor(public formbuilder:FormBuilder,public api:ApiService) { 
    
  }
  selectedItems = [];
  a: addons[] = [];
  d: addons[] = [];
  v: veg[]=[];
  n: nonveg[]=[];
  nvtotal:number=0;
vtotal:number=0;
total:number=0;
quantityVeg:number=0;
quantityNonVeg:number=0;
  dropdownSettings:IDropdownSettings={};
  ngOnInit(): void {
    
    for(var i=0;i<this.d.length;i++){
      this.a.push(this.d[i]);
    }
    this.getadd();
    this.getveg();
    this.getnonveg();

    this.dropdownSettings={
      singleSelection: false,
      textField: 'name',
      idField: 'item_id',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
    this.formValue=this.formbuilder.group({
      eventName:[''],
      userName:[''],
      userAddress:[''],
      userMobilenumber:[''],
      userEmailId:[''],
      eventAddress:[''],
      eventDate:[''],
      eventTime:[''],
      quantityVeg:[''],
      quantityNonVeg:['']
    })
     
  }
 

  eventDetails(){
   
    this.ei.eventName=this.formValue.value.eventName;
    this.ei.userName=this.formValue.value.userName;
    this.ei.userAddress=this.formValue.value.userAddress;
    this.ei.userMobilenumber=this.formValue.value.userMobilenumber;
    this.ei.userEmailId=this.formValue.value.userEmailId;
    this.ei.eventAddress=this.formValue.value.eventAddress;
    this.ei.eventDate=this.formValue.value.eventDate;
    this.ei.eventTime=this.formValue.value.eventTime;
    this.ei.quantityVeg=this.formValue.value.quantityVeg;
    this.ei.quantityNonVeg=this.formValue.value.quantityNonVeg;
    this.ei.vtotal=this.vtotal;
    this.ei.nvtotal=this.nvtotal;
    this.ei.total=this.total;
    
    this.api.bookevent(this.ei).subscribe(res=>{
      console.log(res);
      alert("event booked");
      this.formValue.reset();  
    },
    err=>{
      alert("something went wrong");
    })
  }
   getadd()
   {
     return this.api.addon().subscribe(res=>{this.a=res});
   }
   getveg()
   {
    return this.api.veg().subscribe(res=>{this.v=res});
   }
   getnonveg()
   {
    return this.api.nonveg().subscribe(res=>{this.n=res});
   }

  onVegSelect(item: any) {
   
    this.vtotal += this.v[item.item_id - 1].price;
    
  }
  
  onNonvegSelect(item: any) {
     this.nvtotal += this.n[item.item_id - 1].price;

  }
  onVegSelectAll(items: any) {
    for(var i=0;i<items.length;i++){
      this.vtotal += this.v[items[i].item_id - 1].price;
    }
  }
  onNonVegSelectAll(items: any) {
    for(var i=0;i<items.length;i++){
      this.nvtotal += this.n[items[i].item_id - 1].price;
    }
  }
  onVegDeSelect(item :any){
    
    this.vtotal -= this.v[item.item_id - 1].price;

  }
  onNonVegDeSelect(item : any){
    this.nvtotal -= this.n[item.item_id - 1].price;
  }
  onVegDeSelectAll(items:any){
    this.vtotal = 0;
  }
  onNonVegDeSelectAll(items:any){
    this.nvtotal =0;
  }
  
  
  selected:number | undefined;
  
  
  
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
