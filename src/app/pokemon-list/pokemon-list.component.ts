import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchQuery: string = '';
  selectedType: string = '';
  types: string[] = [];

  constructor(private pokedexService: PokedexService, private router: Router) { }

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
      this.filteredPokemons = this.pokemons;

      this.pokemons.forEach(pokemon => {
        this.pokedexService.getPokemonDetails(pokemon.url).subscribe((detail: any) => {
          pokemon.image = detail.sprites.front_default;
          pokemon.types = detail.types.map((t: { type: { name: any; }; }) => t.type.name);
          this.updateTypes(pokemon.types);
          const str = pokemon.url;
          pokemon.id = str.split("/")[str.split("/").length - 2]; // Extraire l'ID de l'URL
        });
      });
    });
  }
  updateTypes(types: string[]): void {
    types.forEach(type => {
      if (!this.types.includes(type)) {
        this.types.push(type);
      }
    });
  }
  // updateTypes(types: any) {
  //   throw new Error('Method not implemented.');
  // }
  addToFavorites(pokemon: any): void {
    this.pokedexService.addToFavorites(pokemon);
  }


  goToPokemonDetail(id: number): void {
    this.router.navigateByUrl(`/pokemon-detail/${id}`);
  }
  searchPokemons(): void {
    this.filteredPokemons = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedType ? pokemon.types.includes(this.selectedType) : true)
    );
  }

  }

