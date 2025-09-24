import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoApi } from './meteo-api';

describe('MeteoApi', () => {
  let component: MeteoApi;
  let fixture: ComponentFixture<MeteoApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteoApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
