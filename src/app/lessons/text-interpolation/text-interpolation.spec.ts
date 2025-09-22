import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInterpolation } from './text-interpolation';

describe('TextInterpolation', () => {
  let component: TextInterpolation;
  let fixture: ComponentFixture<TextInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInterpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInterpolation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
