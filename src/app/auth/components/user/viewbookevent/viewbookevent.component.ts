import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/auth/classes/events';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/auth/services/api.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-viewbookevent',
  templateUrl: './viewbookevent.component.html',
  styleUrls: ['./viewbookevent.component.css']
})
export class ViewbookeventComponent implements OnInit {
  events:Events =new Events();
  formValue !: FormGroup
  constructor(private api:ApiService,public formbuilder:FormBuilder) { }
  ed !:any;
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      eventName:[''],
      eventAddress:[''],
      eventTime:[''],
      eventDate:[''],
    })
    this. getbookedDetails();
  }

  getbookedDetails(){
    this.api.Viewevent().subscribe(res=>{this.ed=res;})
  }
   
  deletebookedDetails(row :any)
  {
    this.api.deleteevent(row.id).subscribe(res=>{
      alert("Event Deleted");
      this. getbookedDetails();
    })
  }
  onedit(row:any)
  {
    this.ed.id=row.id;
    this.formValue.controls['eventName'].setValue(row.eventName);
    this.formValue.controls['eventDate'].setValue(row.eventDate);
    this.formValue.controls['eventTime'].setValue(row.eventTime);
    this.formValue.controls['eventAddress'].setValue(row.eventAddress);
   
  }
  updateDetails(){
    this.ed.eventName=this.formValue.value.eventName;
    this.ed.eventAddress=this.formValue.value.eventAddress;
    this.ed.eventDate=this.formValue.value.eventDate;
    this.ed.eventTime=this.formValue.value.eventTime;
    this.api.updateevent(this.ed,this.ed.id)
    .subscribe(res=>{
      alert("updated successfully");
      
    })

  }

}
