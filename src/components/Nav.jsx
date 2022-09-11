import styles from './Nav.module.css'
import img from '../img/poke-ball.png'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className={styles.nav}>

      <div className={styles.logo}>
        <img className={styles.image} src={img} alt='pokemon' />
        <h1 className={styles.title}>Pokemon</h1>
      </div>

      <div>
        <input placeholder='Search Pokemon...' className={styles.search} type='text' />
        <input type='button' className={styles.searchicon} />
      </div>

      <div className={styles.create}>
        <div className={styles.camera}>
          <div className={styles.ligth} />
        </div>

        <div className={styles.buttoncolor}>
          <div className={styles.colors}>
            <div className={styles.red} />
            <div className={styles.yellow} />
            <div className={styles.green} />
          </div>
          <div>
            <Link to='/create'>
              <button className={styles.createpoke}>Create Pokemon</button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}
