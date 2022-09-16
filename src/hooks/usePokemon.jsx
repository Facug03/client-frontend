import { useState, useEffect } from 'react'
import { fetchPokemons } from '../helpers/fecthPokemons'

export const usePokemon = () => {
  const [isLoading, setisLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
      .then(pokemons => {
        setisLoading(false)
        setPokemons(pokemons)
      })
  }, [])

  return {
    isLoading,
    pokemons
  }
}
