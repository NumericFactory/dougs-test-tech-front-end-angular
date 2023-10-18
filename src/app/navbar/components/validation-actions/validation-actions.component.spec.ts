import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationActionsComponent } from './validation-actions.component';

describe('ValidationActionsComponent', () => {
  let component: ValidationActionsComponent;
  let fixture: ComponentFixture<ValidationActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationActionsComponent]
    });
    fixture = TestBed.createComponent(ValidationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
