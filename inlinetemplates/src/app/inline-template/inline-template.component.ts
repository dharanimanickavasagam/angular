import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `<div>Hey there</div>`,
  styles: [`
  div {
    color : red;
   }
   `]
})
export class InlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
