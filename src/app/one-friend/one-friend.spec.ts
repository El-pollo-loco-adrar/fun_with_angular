import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFriend } from './one-friend';

describe('OneFriend', () => {
  let component: OneFriend;
  let fixture: ComponentFixture<OneFriend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneFriend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFriend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
