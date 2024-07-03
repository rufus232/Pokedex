import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }
}
