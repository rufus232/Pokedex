import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}pokemon?limit=150`); // Modifiez limit selon vos besoins
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  getPokemonDetailsById(id: number) {
    return this.http.get(`${this.apiUrl}pokemon/${id}`);
  }
  // Méthodes pour gérer les favoris
  getFavorites(): any[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  addToFavorites(pokemon: any): void {
    let favorites = this.getFavorites();
    favorites.push(pokemon);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFromFavorites(pokemon: any): void {
    let favorites = this.getFavorites().filter((fav: any) => fav.id !== pokemon.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

}
