import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBinderComponent } from './style-binder.component';

describe('StyleBinderComponent', () => {
  let component: StyleBinderComponent;
  let fixture: ComponentFixture<StyleBinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
