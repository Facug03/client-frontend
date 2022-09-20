/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import PokeCard from './PokeCard'
import Loading from './Loading'
import Filter from './Filter'
import styles from './Main.module.css'
import { useSelector } from 'react-redux'

export default function Main () {
  const pokemons = useSelector(state => state.pokemons)
  const pokemonsFiltered = useSelector(state => state.pokemonsFiltered)
  const [currentPage, setCurrentPage] = useState(0)

  const filteredPokemons = () => {
    if (pokemonsFiltered.length !== 0) return pokemonsFiltered.slice(currentPage, currentPage + 12)
    return pokemons.slice(currentPage, currentPage + 12)
  }

  const nextPage = () => {
    if (currentPage + 12 < pokemons.length) setCurrentPage(currentPage + 12)
  }

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 12)
  }

  return (
    <div className={styles.main}>
      <Filter />
      <div className={styles.mid} />
      <section className={styles.card}>
        {filteredPokemons().map(poke => <PokeCard
          key={poke.id}
          id={poke.id}
          name={poke.name}
          types={poke.types}
          filter={poke.filter}
          hp={poke.hp}
          attack={poke.attack}
          defense={poke.defense}
          specialAt={poke.specialAt}
          specialDef={poke.specialDef}
          speed={poke.speed}
                                        />)}
        {pokemons.length === 0 && <Loading />}
        {(pokemons.length > 0 && pokemonsFiltered.length === 0) &&
          <div className={styles.button}>
            {currentPage !== 0 ? <button className={styles.buttonprev} onClick={prevPage}>{'<'}</button> : <div />}
            {currentPage + 12 < pokemons.length ? <button className={styles.buttonnext} onClick={nextPage}>{'>'}</button> : <div />}
          </div>}
        {pokemonsFiltered.length > 0 &&
          <div className={styles.button}>
            {currentPage !== 0 ? <button className={styles.buttonprev} onClick={prevPage}>{'<'}</button> : <div />}
            {currentPage + 12 < pokemonsFiltered.length ? <button className={styles.buttonnext} onClick={nextPage}>{'>'}</button> : <div />}
          </div>}
      </section>
    </div>
  )
}
