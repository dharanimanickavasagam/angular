import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binder-example',
  templateUrl: './class-binder-example.component.html',
  styleUrls: ['./class-binder-example.component.css']
})
export class ClassBinderExampleComponent implements OnInit {

  public name = 'dharani';

  // Method 1 and Method 2
  public successClass = 'text-success';

  // Method 3
  public isCSSUsed = true;
  public chooseCSS = 'text-special';

  // Method 4
  public hasError = true;

  // Method 5
  public isSpecial = true;

  // messageClasses is an object
  public messageClasses = {
  'text-success' : !this.hasError,
  'text-danger' : this.hasError,
  'text-special' : this.isSpecial
  };


  constructor() { }

  ngOnInit() {
  }

  getCSS() {
    if (this.isCSSUsed) {
      this.chooseCSS = 'text-danger';
      this.isCSSUsed = false;
    } else {
      this.chooseCSS = 'text-success';
      this.isCSSUsed = true;
    }
 }

  toggleHasError() {
   if (this.hasError) {
      this.hasError = false;
    } else {
      this.hasError = true;
    }
   }

}
