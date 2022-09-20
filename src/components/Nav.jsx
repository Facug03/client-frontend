/* eslint-disable react/jsx-closing-tag-location */
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchPokemon } from '../actions'
import styles from './Nav.module.css'
import img from '../img/poke-ball.png'
import logo from '../img/Pokedex.png'

export default function Nav () {
  const location = useLocation()
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(false)
  const [search, setSearch] = useState('')

  if (location.pathname === '/create' && !current) {
    setCurrent(true)
  } else if (location.pathname === '/' && current) {
    setCurrent(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(searchPokemon(e.target[0].value))
  }

  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <div className={styles.logo}>
          <img className={styles.image} src={img} alt='pokemon' />
          <img className={styles.title} src={logo} alt='logo' />
        </div>
      </Link>
      <form className={styles.searchbar} onSubmit={handleSearch}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Pokemon...' className={styles.search} type='text' />
        <input type='submit' className={styles.searchicon} />
      </form>

      <div className={styles.create}>
        <div className={styles.camera}>
          <div className={styles.ligth} />
        </div>
        <div className={styles.buttoncolor}>
          <div className={!current ? styles.colors : styles.current}>
            <div className={styles.red} />
            <div className={styles.yellow} />
            <div className={styles.green} />
          </div>
          {!current
            ? <div>
              <Link to='/create'>
                <button className={styles.createpoke}>Create Pokemon</button>
              </Link>
            </div>
            : null}
        </div>
      </div>
    </nav>
  )
}
