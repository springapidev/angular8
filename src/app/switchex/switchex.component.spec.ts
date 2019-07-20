import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchexComponent } from './switchex.component';

describe('SwitchexComponent', () => {
  let component: SwitchexComponent;
  let fixture: ComponentFixture<SwitchexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
