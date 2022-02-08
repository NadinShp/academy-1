export default function getSortPokemonByHeight(pokemons){
    const sortedPokemonArr = [...pokemons];
    return sortedPokemonArr.sort((a, b)=>a.height - b.height);
}