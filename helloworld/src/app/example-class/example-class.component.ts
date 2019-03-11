import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-example-class',
  templateUrl: './example-class.component.html',
  styleUrls: ['./example-class.component.css']
})
export class ExampleClassComponent implements OnInit {

  name = 'dharani' ;
  age = '26';

    constructor() { }

  ngOnInit() {
  }

}
