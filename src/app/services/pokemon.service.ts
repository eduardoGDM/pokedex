import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: { name: string, url: string }[] = []; // ira receber todos os objetos separados dentro de um array vindo do require para utilizar em um component .
  //especificar o tipo de dados do objeto recebido da API !!!! NÃO ESQUECER!!!!
  constructor(private httpClient: HttpClient) {
    //conexão para a requisição http
    this.carregarPokemons();
  }
  async carregarPokemons() {                     //necessario ser uma função assincrona para aguardar uma promise                               
    const require = await this.httpClient //armazena em require a espera do objeto vindo do metodo GET
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151') //metodo get recebendo <any> dados do link da API
      .toPromise(); //promise dos dados recebidos do método GET

    this.pokemons = require.results; //results foram os dados separados na URL dentro do total de dados, no caso 151
    console.log(this.pokemons);
  }
}
