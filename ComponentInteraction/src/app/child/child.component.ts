import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  public exportData;

  // tslint:disable-next-line:no-input-rename
  @Input('exportName') public name;

  @Output()
  public event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.event.emit('Passed from Child');
  }

}
