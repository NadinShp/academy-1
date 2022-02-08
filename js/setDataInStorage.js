function setPokemonInLocalStorage(arr){
    localStorage.setItem('pokemons', JSON.stringify(arr));
}
function setPokemonInSessionStorage(sortedByWeight){
    sessionStorage.setItem('sortedByWeight', JSON.stringify(sortedByWeight));
}
function setPokemoninSeesionStHeight(sortedByHeight){
    sessionStorage.setItem('sortedByHeight', JSON.stringify(sortedByHeight));
}
export {setPokemonInLocalStorage, setPokemonInSessionStorage, setPokemoninSeesionStHeight};