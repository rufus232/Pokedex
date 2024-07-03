import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})

export class FavoriteListComponent implements OnInit {
  favorites: any[] = [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.favorites = this.pokedexService.getFavorites();
  }

  removeFromFavorites(pokemon: any): void {
    this.pokedexService.removeFromFavorites(pokemon);
    this.favorites = this.pokedexService.getFavorites();
  }

  trackById(index: number, pokemon: any): number {
    return pokemon.id;
  }
}
