import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeDialogComponentComponent } from './add-employee-dialog-component.component';

describe('AddEmployeeDialogComponentComponent', () => {
  let component: AddEmployeeDialogComponentComponent;
  let fixture: ComponentFixture<AddEmployeeDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeDialogComponentComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
