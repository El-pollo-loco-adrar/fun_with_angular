import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBinding } from './property-binding';

describe('PropertyBinding', () => {
  let component: PropertyBinding;
  let fixture: ComponentFixture<PropertyBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
