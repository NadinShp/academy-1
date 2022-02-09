export default function getSortPokemonByHeight(pokemons){
    let sortedPokemonArr = [...pokemons];
    return sortedPokemonArr.sort((a, b)=>a.height - b.height);
}