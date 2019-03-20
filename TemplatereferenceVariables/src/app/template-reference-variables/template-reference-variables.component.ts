import { Component, OnInit } from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {
  public message;
  public element;
  constructor() { }

  ngOnInit() {
  }

  displayText(referenceVariable: string) {
   this.message = referenceVariable;
  }

}
