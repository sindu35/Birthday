import { Veg } from "./veg";
import { Nonveg } from "./nonveg";
export class Events {
    id:number=0;
    eventName:string ='';
    userName:string='';
    userAddress:string='';
    userMobilenumber:string='';
    userEmailId:string='';
    eventAddress:string='';
    eventDate:string ='';
    eventTime:string ='';
    noofpeople:string='';
    quantityVeg:number=0;
      quantityNonVeg:number=0;
    vtotal:number=0;
    nvtotal:number=0;
    total:number=0;
   veg :Veg=new Veg();
  nonveg:Nonveg=new Nonveg();
    gettotal(quantityNonVeg:number,quantityVeg:number,nvtotal:number,vtotal:number){
     return  this.total+=this.quantityNonVeg*this.nvtotal+this.vtotal*this.quantityVeg;
    }

   
   
     
      
     
      
   
}
