import axios from 'axios'

export const fetchPokemons = async () => {
  const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  const smallPokemonList = resp.data.results
  return transformSmallPokemonIntoPokemon(smallPokemonList)
}

const transformSmallPokemonIntoPokemon = (smallPokemonList) => {
  const pokemonArr = Promise.all(smallPokemonList.map(poke => axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.url.split('/')[6]}`)
    .then(({ data }) => {
      const id = data.id
      const types = data.types.map(types => types.type.name)
      const hp = data.stats[0].base_stat
      const attack = data.stats[1].base_stat
      const defense = data.stats[2].base_stat
      const specialAt = data.stats[3].base_stat
      const specialDef = data.stats[4].base_stat
      const speed = data.stats[5].base_stat
      return {
        id,
        name: data.name,
        types,
        hp,
        attack,
        defense,
        specialAt,
        specialDef,
        speed
      }
    }))).then(res => res)
  return pokemonArr
}
