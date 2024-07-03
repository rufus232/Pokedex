import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { PokemonForm } from '../pokemon-form.model';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {

  pokemonId: number | undefined;
  pokemonDetails: any;

  constructor(private route: ActivatedRoute, private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = Number(params.get('id'));

      // Appel au service pour récupérer les détails du Pokémon
      this.pokedexService.getPokemonDetailsById(this.pokemonId).subscribe((data: any) => {
        this.pokemonDetails = data;
      });
    });
  }
  addToFavorites(pokemon: any): void {
    this.pokedexService.addToFavorites(pokemon);
  }

}
