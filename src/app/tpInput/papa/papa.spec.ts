import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Papa } from './papa';

describe('Papa', () => {
  let component: Papa;
  let fixture: ComponentFixture<Papa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Papa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Papa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
