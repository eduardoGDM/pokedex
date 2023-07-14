import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonService){ //toda vez que um component de lista for construido vai trazer o service indicado.
      //public será possivel o component html tratar os dados
  }
}
