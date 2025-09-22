import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoTest } from './compo-test';

describe('CompoTest', () => {
  let component: CompoTest;
  let fixture: ComponentFixture<CompoTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
