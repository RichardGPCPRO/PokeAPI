const pokemonName = document.querySelector('.pokemon_name');

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIresponse.json();
  return data;
}

const renderpokemon = async(pokemon) =>{

  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
}

renderpokemon('25')

