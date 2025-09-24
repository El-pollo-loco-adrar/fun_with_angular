import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor } from './ng-for';

describe('NgFor', () => {
  let component: NgFor;
  let fixture: ComponentFixture<NgFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
