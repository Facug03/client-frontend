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
        <div className={styles.typefilter}>
          <h4 className={styles.typetitle}>Type</h4>
          <span className={styles.types}>normal</span>
          <span className={styles.types}>fighting</span>
          <span className={styles.types}>flying</span>
          <span className={styles.types}>poison</span>
          <span className={styles.types}>ground</span>
          <span className={styles.types}>rock</span>
          <span className={styles.types}>bug</span>
          <span className={styles.types}>ghost</span>
          <span className={styles.types}>steel</span>
          <span className={styles.types}>fire</span>
          <span className={styles.types}>water</span>
          <span className={styles.types}>grass</span>
          <span className={styles.types}>electric</span>
          <span className={styles.types}>psychic</span>
          <span className={styles.types}>ice</span>
          <span className={styles.types}>dragon</span>
          <span className={styles.types}>dark</span>
          <span className={styles.types}>fairy</span>
          <span className={styles.types}>unknown</span>
          <span className={styles.types}>shadow</span>
        </div>
        <div className={styles.typefilter}>
          <h4 className={styles.typetitle}>Order</h4>
          <span className={styles.ordertype}>A-Z</span>
          <span className={styles.ordertype}>Z-A</span>
          <span className={styles.ordertype}>Attack++</span>
          <span className={styles.ordertype}>Attack--</span>
          <span className={styles.ordertype}>Hp++</span>
          <span className={styles.ordertype}>Hp--</span>
        </div>
        <div className={styles.typefilter}>
          <h4 className={styles.typetitle}>Origin</h4>
          <span className={styles.ordertype}>All</span>
          <span className={styles.ordertype}>Created</span>
          <span className={styles.ordertype}>Original</span>
        </div>
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
            {currentPage !== 0 ? <button className={styles.buttonprev} onClick={prevPage}>{'<'}</button> : <div />}
            {currentPage + 12 < pokemons.length ? <button className={styles.buttonnext} onClick={nextPage}>{'>'}</button> : <div />}
          </div>}
      </section>
    </div>
  )
}
