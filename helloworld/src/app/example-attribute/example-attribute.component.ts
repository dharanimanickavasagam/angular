import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-example-attribute]',
  templateUrl: './example-attribute.component.html',
  styleUrls: ['./example-attribute.component.css']
})
export class ExampleAttributeComponent implements OnInit {

  name = 'karthik';
  age = '29';

  constructor() { }

  ngOnInit() {
  }

}
