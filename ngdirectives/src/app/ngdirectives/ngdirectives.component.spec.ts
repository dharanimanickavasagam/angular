import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdirectivesComponent } from './ngdirectives.component';

describe('NgdirectivesComponent', () => {
  let component: NgdirectivesComponent;
  let fixture: ComponentFixture<NgdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
