import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCrudEmployeesComponent } from './table-crud-employees.component';

describe('TableCrudEmployeesComponent', () => {
  let component: TableCrudEmployeesComponent;
  let fixture: ComponentFixture<TableCrudEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCrudEmployeesComponent]
    });
    fixture = TestBed.createComponent(TableCrudEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
