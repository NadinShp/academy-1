import getSortPokemonByHeight from './sortedByHeight.js';
import getSortPokemonByWeight from './sortedByWeight.js';
import * as setInStorage from './setDataInStorage.js';

const BASE_URL = 'https://pokeapi.co/api/v2';
const pokemons = [];
let xhr = new XMLHttpRequest();
xhr.open('GET', `${BASE_URL}/pokemon?limit=10`);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function(){
    let counter = 0;
    if(xhr.status !== 200){
    console.log(`Error ${xhr.status}: ${xhr.statusText}`)
    }
    if (xhr.readyState === 4) {
    const results = xhr.response.results.map(el=>el.name);
    results.forEach((el, index)=>{
        results[index] = new XMLHttpRequest();
        results[index].open('GET', `${BASE_URL}/pokemon/${el}`);
        results[index].responseType = 'json';
        results[index].send();
        results[index].onload = function(){
            if(results[index].status !== 200){
            console.log(`Error ${results[index].status}: ${results[index].statusText}`)
            } else{
            const res = results[index].response;
            const {name, weight, height, id} = res;
            pokemons.push({name, weight, height, id});
            counter++;
            }
            if(counter===10){
            setInStorage.setPokemonInLocalStorage(pokemons);
            const sortedByHeight = getSortPokemonByHeight(pokemons);
            console.log("sortedByHeight", sortedByHeight);
            setInStorage.setPokemoninSeesionStHeight(sortedByHeight);
            const sortedByWeight = getSortPokemonByWeight(pokemons);
            console.log("sortedByWeight", sortedByWeight);
            setInStorage.setPokemonInSessionStorage(sortedByWeight);
            }}
        })
    }
}
xhr.onerror = function(){
    console.log('Request failed');
}