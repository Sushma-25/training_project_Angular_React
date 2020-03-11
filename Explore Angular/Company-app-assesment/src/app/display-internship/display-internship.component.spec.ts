import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInternshipComponent } from './display-internship.component';

describe('DisplayInternshipComponent', () => {
  let component: DisplayInternshipComponent;
  let fixture: ComponentFixture<DisplayInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
