import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Events } from 'src/app/auth/classes/events';
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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  minDate=new Date();
  maxDate=new Date(2023,3,10);
  editForm !:FormGroup;
 
  ei:Events =new Events();
 
  constructor(private formBuilder:FormBuilder,private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData :any,
    private dialogRef:MatDialogRef<EditComponent>) { }
    selectedItems = [];
    a: addons[] = [];
    d: addons[] = [];
    v: veg[]=[];
    n: nonveg[]=[];
    selectedv:veg[]=[];
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
    this.editForm=this.formBuilder.group({
      eventName:['',Validators.required],
      eventTime:['',Validators.required],
      eventDate:['',Validators.required],
      eventAddress:['',Validators.required],
   nvtotal:[''],
   vtotal:[''],
      quantityNonVeg:[''],
      quantityVeg:[''],
      total:[''],
      userAddress: [''],
      userEmailId:[''],
      userMobilenumber: [''],
      userName:[''],
    
      noofpeople:[''],
    })
 
    if(this.editData)
    { 
      this.editForm.controls['eventName'].setValue(this.editData.eventName);
      this.editForm.controls['userName'].setValue(this.editData.userName);
      this.editForm.controls['userAddress'].setValue(this.editData.userAddress);
      this.editForm.controls['userMobilenumber'].setValue(this.editData.userMobilenumber);
      this.editForm.controls['userEmailId'].setValue(this.editData.userEmailId);
      this.editForm.controls['eventAddress'].setValue(this.editData.eventAddress);
      this.editForm.controls['noofpeople'].setValue(this.editData.noofpeople);
      this.editForm.controls['eventTime'].setValue(this.editData.eventTime);
      this.editForm.controls['eventDate'].setValue(this.editData.eventDate);
      this.editForm.controls['quantityVeg'].setValue(this.editData.quantityVeg);
      this.editForm.controls['quantityNonVeg'].setValue(this.editData.quantityNonVeg);
     

  }


  }
  editfield()
  {
     this.editForm.controls['nvtotal'].setValue(this.nvtotal);
      this.editForm.controls['vtotal'].setValue(this.vtotal);
      this.editForm.controls['total'].setValue(this.total+(this.nvtotal*this.editData.quantityNonVeg)+(this.vtotal*this.editData.quantityVeg));
    if(this.editForm.valid){
      this.api. updateevent(this.editForm.value,this.editData.id).
      subscribe({
        next:(res)=>{
         
          alert("event details updated successfully ");
          this.editForm.reset()
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("error while updating the event")
        }
      })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  geteditDetails(){
    this.api.Viewevent().subscribe(res=>{this.ei=res})
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

  
    }
  else{
  
    this.total=this.total-price; 
     }
 }
 errorHandling(control:string,error:string){
 return this.editForm.controls[control].hasError(error);

 }

}