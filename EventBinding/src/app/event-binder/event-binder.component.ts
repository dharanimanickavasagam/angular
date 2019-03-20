import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binder',
  templateUrl: './event-binder.component.html',
  styleUrls: ['./event-binder.component.css']
})
export class EventBinderComponent implements OnInit {
  public message;
  public interpolationMessage;
  public eventMessage;
  public eventProperty;
  public templateEvent;
  constructor() { }

  ngOnInit() {
  }

  // two way binding
  displayMessage(myValue: string) {
    document.getElementById('divIDTwoWay').innerHTML += myValue;
   }


  // event binding
  justDisplayMessage() {
    this.message = 'Welcome Greetings from event binding. ';
    document.getElementById('divID').innerHTML += this.message;

    this.interpolationMessage = 'Hello from Interpolation. ';

  }


  passEventInfo(event) {

    this.eventMessage = event;
    console.log(this.eventMessage);

    this.eventProperty = event.type;
  }

 }
