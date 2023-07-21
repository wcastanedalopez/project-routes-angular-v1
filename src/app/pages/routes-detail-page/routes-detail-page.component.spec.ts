import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesDetailPageComponent } from './routes-detail-page.component';

describe('RoutesDetailPageComponent', () => {
  let component: RoutesDetailPageComponent;
  let fixture: ComponentFixture<RoutesDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesDetailPageComponent]
    });
    fixture = TestBed.createComponent(RoutesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
