import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
 public departments = [
   { id: 1, name: 'Angular'},
   { id: 2, name: 'Spring' },
   { id: 3, name: 'NodeJS' },
   { id: 4, name: 'Spring Boot' },
   { id: 5, name: 'Bootstrap' },
 ];


  constructor(private router: Router) { }

  ngOnInit() {
  }


  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

}
