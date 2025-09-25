import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timothee } from './timothee';

describe('Timothee', () => {
  let component: Timothee;
  let fixture: ComponentFixture<Timothee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timothee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timothee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
