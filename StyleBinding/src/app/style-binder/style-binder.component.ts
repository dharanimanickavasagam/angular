import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binder',
  templateUrl: './style-binder.component.html',
  styleUrls: ['./style-binder.component.css']
})
export class StyleBinderComponent implements OnInit {

  public styleProps = {
  color : 'blue',
  fontStyle : 'italic'
};

  public hasError = true;

  public highlightColor = 'pink';
  constructor() { }

  ngOnInit() {
  }

}


