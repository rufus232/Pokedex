import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { LoginComponent } from './login/login.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent},
  { path: 'pokemon-list', component: PokemonListComponent},
  { path: 'favorites', component: FavoriteListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-pokemon', component: AddPokemonComponent }

];
