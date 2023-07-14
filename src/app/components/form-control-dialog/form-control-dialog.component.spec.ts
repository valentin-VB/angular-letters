import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlDialogComponent } from './form-control-dialog.component';

describe('FormControlDialogComponent', () => {
  let component: FormControlDialogComponent;
  let fixture: ComponentFixture<FormControlDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlDialogComponent]
    });
    fixture = TestBed.createComponent(FormControlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
