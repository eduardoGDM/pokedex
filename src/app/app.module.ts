import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


import { HttpClientModule } from '@angular/common/http'; // necessario para realizar requisições Http
import { PokemonService } from './services/pokemon.service'; //importação do service criado

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
  ],
  providers: [PokemonService], //para utilizar um service,é necessario adiciona-lo em providers
  bootstrap: [AppComponent]
})
export class AppModule { }
