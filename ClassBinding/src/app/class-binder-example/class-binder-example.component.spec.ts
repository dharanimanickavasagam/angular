import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBinderExampleComponent } from './class-binder-example.component';

describe('ClassBinderExampleComponent', () => {
  let component: ClassBinderExampleComponent;
  let fixture: ComponentFixture<ClassBinderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBinderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBinderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
