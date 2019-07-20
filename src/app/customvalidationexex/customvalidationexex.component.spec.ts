import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidationexexComponent } from './customvalidationexex.component';

describe('CustomvalidationexexComponent', () => {
  let component: CustomvalidationexexComponent;
  let fixture: ComponentFixture<CustomvalidationexexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomvalidationexexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomvalidationexexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
