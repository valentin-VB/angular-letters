import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPreviewComponent } from './letter-preview.component';

describe('LetterPreviewComponent', () => {
  let component: LetterPreviewComponent;
  let fixture: ComponentFixture<LetterPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterPreviewComponent]
    });
    fixture = TestBed.createComponent(LetterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
