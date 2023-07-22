import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesManageComponent } from './routes-manage.component';

describe('RoutesManageComponent', () => {
  let component: RoutesManageComponent;
  let fixture: ComponentFixture<RoutesManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesManageComponent]
    });
    fixture = TestBed.createComponent(RoutesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
