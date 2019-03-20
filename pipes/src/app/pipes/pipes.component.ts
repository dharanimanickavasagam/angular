import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

public stringPipe = 'Welcome to the pipes tutorial';

public stringPipeJson = {
    firstName : 'dharani',
    age : 26
};


public numericalPipe = 3.1428;

public date = new Date();

constructor() { }

ngOnInit() {
  }

}
