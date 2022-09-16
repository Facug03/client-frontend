/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import { usePokemon } from '../hooks/usePokemon'
import PokeCard from './PokeCard'
import Loading from './Loading'
import styles from './Main.module.css'

export default function Main () {
  const { isLoading, pokemons } = usePokemon()
  const [currentPage, setCurrentPage] = useState(0)

  const filteredPokemons = () => {
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
      <section className={styles.filtro}>
        <h2 className={styles.filtertitle}>Filter by</h2>
        <h4>Type</h4>
        <h4>Order</h4>
        <h4>Origin</h4>
      </section>
      <div className={styles.mid} />
      <section className={styles.card}>
        {filteredPokemons().map(poke => <PokeCard
          key={poke.id}
          id={poke.id}
          name={poke.name}
          types={poke.types}
                                        />)}
        {isLoading && <Loading />}
        {!isLoading &&
          <div className={styles.button}>
            <button className={styles.buttonprev} onClick={prevPage}>{'<'}</button>
            <button className={styles.buttonnext} onClick={nextPage}>{'>'}</button>
          </div>}
      </section>

    </div>
  )
}
