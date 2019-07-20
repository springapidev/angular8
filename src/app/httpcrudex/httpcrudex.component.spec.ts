import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcrudexComponent } from './httpcrudex.component';

describe('HttpcrudexComponent', () => {
  let component: HttpcrudexComponent;
  let fixture: ComponentFixture<HttpcrudexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpcrudexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpcrudexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
