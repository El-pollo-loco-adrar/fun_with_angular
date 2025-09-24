import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCompo } from './pokemon-compo';

describe('PokemonCompo', () => {
  let component: PokemonCompo;
  let fixture: ComponentFixture<PokemonCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
