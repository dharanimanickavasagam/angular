import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngdirectives',
  templateUrl: './ngdirectives.component.html',
  styleUrls: ['./ngdirectives.component.css']
})
export class NgdirectivesComponent implements OnInit {

public name = '';
public isEnabled = false;
public firstName;
public lastName;
public middleName;
public toggleInput = true;
public conditionExpression = 'yes';

  public colors = ['red', 'blue'];


  constructor() { }

  ngOnInit() {
  }

  setIsEnabled() {
    if (this.isEnabled) {
      this.isEnabled = false;
    } else {
    this.isEnabled = true;
    }
  }
}

