import getSortPokemonByHeight from './sortedByHeight.js';
import getSortPokemonByWeight from './sortedByWeight.js';
import * as setInStorage from './setDataInStorage.js';

const pokemonInfo = []
const BASE_URL = 'https://pokeapi.co/api/v2';

function getDataWithPokemonName(name){
    return fetch(`${BASE_URL}/pokemon/${name}`)
    .then(res=> res.json())
    .then(({name, weight, height, id})=>pokemonInfo.push({name, weight, height, id}))
}

async function fetchPokemons(){
    try{
        const response = await fetch(`${BASE_URL}/pokemon?limit=10`);
        const {results} = await response.json();
        const promises = results.map(el=>el.name).map(getDataWithPokemonName);
        const data = await Promise.allSettled(promises);
        await data.forEach(result=>result.status==="rejected" ? console.log(result) : null);
        setInStorage.setPokemonInLocalStorage(pokemonInfo);
        const sortedByHeight = getSortPokemonByHeight(pokemonInfo);
        console.log("sortedByHeight", sortedByHeight);
        setInStorage.setPokemoninSeesionStHeight(sortedByHeight);
        const sortedByWeight = getSortPokemonByWeight(pokemonInfo);
        console.log("sortedByWeight", sortedByWeight);
        setInStorage.setPokemonInSessionStorage(sortedByWeight);
    } catch(error){
        alert("Something is wrong. Try again, please");
    }
}
fetchPokemons();