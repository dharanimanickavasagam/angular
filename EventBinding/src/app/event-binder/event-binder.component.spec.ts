import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinderComponent } from './event-binder.component';

describe('EventBinderComponent', () => {
  let component: EventBinderComponent;
  let fixture: ComponentFixture<EventBinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
