import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/auth/classes/events';

@Component({
  selector: 'app-viewbookevent',
  templateUrl: './viewbookevent.component.html',
  styleUrls: ['./viewbookevent.component.css']
})
export class ViewbookeventComponent implements OnInit {
  events:Events[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.events=[{
      eventName:"SSr Event",
    eventTime:"2:00 to 5:00 pm",
    eventDate:"22/1/2001"

    },
    {
      eventName:"SSr Event",
    eventTime:"2:00 to 5:00 pm",
    eventDate:"22/1/2001"
    }
  ]
  }

}
