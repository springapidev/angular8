import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleexComponent } from './styleex.component';

describe('StyleexComponent', () => {
  let component: StyleexComponent;
  let fixture: ComponentFixture<StyleexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
