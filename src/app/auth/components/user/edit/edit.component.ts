import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Events } from 'src/app/auth/classes/events';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm !:FormGroup;
 
  ei:Events =new Events();
 
  constructor(private formBuilder:FormBuilder,private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData :any,
    private dialogRef:MatDialogRef<EditComponent>) { }
 

  ngOnInit(): void {
    this.editForm=this.formBuilder.group({
      eventName:['',Validators.required],
      eventTime:['',Validators.required],
      eventDate:['',Validators.required],

      nvtotal:[''],
      quantityNonVeg:[''],
      quantityVeg:[''],
      total:[''],
      userAddress: [''],
      userEmailId:[''],
      userMobilenumber: [''],
      userName:[''],
      vtotal:[''],
    })
 
    if(this.editData)
    { 
      this.editForm.controls['eventName'].setValue(this.editData.eventName);
      this.editForm.controls['eventTime'].setValue(this.editData.eventTime);
      this.editForm.controls['eventDate'].setValue(this.editData.eventDate);
     
    }


  }
  editfield()
  {
   
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




}
