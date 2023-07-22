import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployeesPageComponent } from './show-employees-page.component';

describe('ShowEmployeesPageComponent', () => {
  let component: ShowEmployeesPageComponent;
  let fixture: ComponentFixture<ShowEmployeesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEmployeesPageComponent]
    });
    fixture = TestBed.createComponent(ShowEmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
