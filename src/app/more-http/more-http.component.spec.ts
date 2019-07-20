import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreHttpComponent } from './more-http.component';

describe('MoreHttpComponent', () => {
  let component: MoreHttpComponent;
  let fixture: ComponentFixture<MoreHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
