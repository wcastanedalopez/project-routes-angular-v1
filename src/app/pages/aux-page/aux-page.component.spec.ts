import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxPageComponent } from './aux-page.component';

describe('AuxPageComponent', () => {
  let component: AuxPageComponent;
  let fixture: ComponentFixture<AuxPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxPageComponent]
    });
    fixture = TestBed.createComponent(AuxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
