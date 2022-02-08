export default function getSortPokemonByWeight(pokemons){
    const sortedPokemonArr = [...pokemons];
    return sortedPokemonArr.sort((a, b)=>a.weight - b.weight);
}