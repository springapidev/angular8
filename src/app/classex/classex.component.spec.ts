import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassexComponent } from './classex.component';

describe('ClassexComponent', () => {
  let component: ClassexComponent;
  let fixture: ComponentFixture<ClassexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
