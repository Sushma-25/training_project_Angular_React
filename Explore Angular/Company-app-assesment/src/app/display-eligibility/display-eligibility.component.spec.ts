import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEligibilityComponent } from './display-eligibility.component';

describe('DisplayEligibilityComponent', () => {
  let component: DisplayEligibilityComponent;
  let fixture: ComponentFixture<DisplayEligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
