import { Component } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-compo',
  imports: [CommonModule],
  templateUrl: './pokemon-compo.html',
  styleUrl: './pokemon-compo.css'
})
export class PokemonCompo {
  title: string = 'apiData';
  pokemons: Pokemon[] = [];

  constructor(private apiService:PokemonService){
    console.log('[COMPOSANT] Constructeur appelé');
  }

  async ngOnInit(){
    console.log('[COMPOSANT] ngOnInit déclenché → on appelle le service');
    this.pokemons = await this.apiService.fetchPokemonList();
    console.log('[COMPOSANT] Résultat reçu du service :', this.pokemons);
  }
}
