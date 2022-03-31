import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/auth/classes/events';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/auth/services/api.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-viewbookevent',
  templateUrl: './viewbookevent.component.html',
  styleUrls: ['./viewbookevent.component.css']
})
export class ViewbookeventComponent implements OnInit {
  events:Events =new Events();
  formValue !: FormGroup
  constructor(private api:ApiService,public formbuilder:FormBuilder,private dialog:MatDialog) { }
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
    this.dialog.open(EditComponent,{
      width:'60%',
      data:row,

    }).afterClosed().subscribe(val=>{
      if(val==='update')
      {
        this. getbookedDetails();
      }
    })
  }
  

}
