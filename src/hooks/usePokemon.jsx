import { useEffect } from 'react'
import { fetchPokemons } from '../helpers/fecthPokemons'
import { initialize } from '../actions'
import { useDispatch } from 'react-redux'

export const usePokemon = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchPokemons().then(poke => dispatch(initialize(poke)))
  }, [dispatch])
}
