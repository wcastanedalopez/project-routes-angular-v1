import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesManageComponent } from './employees-manage.component';

describe('EmployeesManageComponent', () => {
  let component: EmployeesManageComponent;
  let fixture: ComponentFixture<EmployeesManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesManageComponent]
    });
    fixture = TestBed.createComponent(EmployeesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
