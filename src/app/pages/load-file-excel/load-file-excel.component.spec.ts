import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFileExcelComponent } from './load-file-excel.component';

describe('LoadFileExcelComponent', () => {
  let component: LoadFileExcelComponent;
  let fixture: ComponentFixture<LoadFileExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadFileExcelComponent]
    });
    fixture = TestBed.createComponent(LoadFileExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
