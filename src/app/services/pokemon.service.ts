import { Injectable } from '@angular/core';

export interface Pokemon{
  id: number;
  name: string;
  image: string;
  sexe: { male: number; female: number};
  taille: string;
  types: any[]
}
@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class PokemonService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

  async fetchPokemonList(): Promise<any> {
    console.log('1');

    const response = await fetch(this.apiUrl);
    console.log('SERVICE', response);
    
    const data = await response.json();
    console.log('Data', data);

    const pokemons = data.map((p:any) => ({
      //id: p.pokemon_id,
      name: p.name.fr,
      image: p.sprites.regular,    
      sexe: p.sexe,
      id: p.pokedex_id,
      taille: p.height,
      types: p.egg_groups,
    }));
    console.log(pokemons[0].types)
    
    console.log('[SERVICE] Données mappées (id, name, image uniquement) :', pokemons);
    return pokemons;    
  }
}
