import axios from 'axios'

export const fetchPokemons = async () => {
  const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  const smallPokemonList = resp.data.results
  return transformSmallPokemonIntoPokemon(smallPokemonList)
}

const transformSmallPokemonIntoPokemon = async (smallPokemonList) => {
  const pokemonArr = await Promise.all(smallPokemonList.map(poke => axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.url.split('/')[6]}`)
    .then(({ data }) => {
      const id = data.id
      const types = data.types.map(types => types.type.name)
      return {
        id,
        name: data.name,
        types
      }
    }))).then(res => res)
  return pokemonArr
}
