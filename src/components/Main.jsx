import { useEffect, useState } from 'react'
import styles from './Main.module.css'
import PokeCard from './PokeCard'

export default function Main () {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    Promise.all([
      fetch('https://pokeapi.co/api/v2/pokemon/1/').then(res => res.json()).then(res => {
        return { name: res.name, type: res.types[0].type.name, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif', id: res.id.toString() }
      }),
      fetch('https://pokeapi.co/api/v2/pokemon/2/').then(res => res.json()).then(res => {
        return { name: res.name, type: res.types[0].type.name, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif', id: res.id.toString() }
      }),
      fetch('https://pokeapi.co/api/v2/pokemon/3/').then(res => res.json()).then(res => {
        return { name: res.name, type: ` ${res.types[0].type.name}/${res.types[1].type.name}`, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif', id: res.id.toString() }
      }),
      fetch('https://pokeapi.co/api/v2/pokemon/4/').then(res => res.json()).then(res => {
        return { name: res.name, type: res.types[0].type.name, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif', id: res.id.toString() }
      }),
      fetch('https://pokeapi.co/api/v2/pokemon/5/').then(res => res.json()).then(res => {
        return { name: res.name, type: res.types[0].type.name, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif', id: res.id.toString() }
      }),
      fetch('https://pokeapi.co/api/v2/pokemon/6/').then(res => res.json()).then(res => {
        return { name: res.name, type: res.types[0].type.name, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif', id: res.id.toString() }
      })
    ]).then(res => setPokemons(res))
  }, [])

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
        {pokemons
          ? pokemons.map(poke => <PokeCard
              key={poke.id}
              id={poke.id}
              name={poke.name}
              type={poke.type}
              img={poke.img}
                                 />)
          : <h2 style={{ fontFamily: 'RobotoMono' }}>Pokemon not found</h2>}
      </section>
    </div>
  )
}
