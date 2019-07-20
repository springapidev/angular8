import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelexComponent } from './ngmodelex.component';

describe('NgmodelexComponent', () => {
  let component: NgmodelexComponent;
  let fixture: ComponentFixture<NgmodelexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodelexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
