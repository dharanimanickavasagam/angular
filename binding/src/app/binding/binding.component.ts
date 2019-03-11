import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})


export class BindingComponent implements OnInit {
  public name = 'Dharani';
  public location = window.location.href;
  public myId = 'testId';
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name + '!';
  }

  public changeIsDisabled() {
    if (this.isDisabled === false ) {
    this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
}
