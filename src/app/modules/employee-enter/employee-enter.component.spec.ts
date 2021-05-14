import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEnterComponent } from './employee-enter.component';

describe('EmployeeEnterComponent', () => {
  let component: EmployeeEnterComponent;
  let fixture: ComponentFixture<EmployeeEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
