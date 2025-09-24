import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffTp1 } from './jeff-tp1';

describe('JeffTp1', () => {
  let component: JeffTp1;
  let fixture: ComponentFixture<JeffTp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeffTp1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeffTp1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
