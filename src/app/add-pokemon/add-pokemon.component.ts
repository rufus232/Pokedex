import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css'
})
export class AddPokemonComponent {
  newPokemon: string = '';

  addPokemon(): void {
    if (this.newPokemon.trim()) {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (!favorites.includes(this.newPokemon.trim())) {
        favorites.push(this.newPokemon.trim());
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      this.newPokemon = '';
    }
  }
}
