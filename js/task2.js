const pokemonInfo = []
const BASE_URL = 'https://pokeapi.co/api/v2';
function getDataWithPokemonName(name){
    return fetch(`${BASE_URL}/pokemon/${name}`)
    .then(res=> res.json())
    .then(({name, weight, height, id})=>pokemonInfo.push({name, weight, height, id}))
}
function setPokemonInLocalStorage(pokemon){
    localStorage.setItem('pokemons', JSON.stringify(pokemon));
}
function getSortPokemonByHeight(pokemons){
    const sortedPokemonArr = [...pokemons];
    return sortedPokemonArr.sort((a, b)=>a.height - b.height);
}
function getSortPokemonByWeight(pokemons){
    const sortedPokemonArr = [...pokemons];
    return sortedPokemonArr.sort((a, b)=>a.weight - b.weight);
}
async function fetchPokemons(){
    try{
        const response = await fetch(`${BASE_URL}/pokemon?limit=10`);
        const {results} = await response.json();
        const promises = results.map(el=>el.name).map(getDataWithPokemonName);
        const data = await Promise.allSettled(promises);
        await data.forEach(result=>result.status==="rejected" ? console.log(result) : null);
        setPokemonInLocalStorage(pokemonInfo);
        const sortedByHeight = getSortPokemonByHeight(pokemonInfo);
        console.log("sortedByHeight", sortedByHeight);
        sessionStorage.setItem('sortedByHeight',JSON.stringify(sortedByHeight));
        const sortedByWeight = getSortPokemonByWeight(pokemonInfo);
        console.log('sortedByWeight', sortedByWeight);
        sessionStorage.setItem('sortedByWeight', JSON.stringify(sortedByWeight));
    } catch(error){
        alert("Something is wrong. Try again, please");
    }
}
fetchPokemons();