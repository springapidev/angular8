import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchainingComponent } from './listchaining.component';

describe('ListchainingComponent', () => {
  let component: ListchainingComponent;
  let fixture: ComponentFixture<ListchainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
