// import { useEffect, useState } from 'react'
import styles from './Pokemon.module.css'
import ima from '../img/ps.png'

export default function Pokemon ({ color, id, idPoke, name, img, modal, setModal }) {
  // const [stats, setStats] = useState()
  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .then(res => res.json())
  //     .then(res => setStats({
  //       height: res.height,
  //       hp: res.stats[0].base_stat,
  //       attack: res.stats[1].base_stat,
  //       defense: res.stats[2].base_stat,
  //       speed: res.stats[5].base_stat,
  //       weight: res.weight
  //     }))
  // })
  return (
    <>
      {modal &&
        <div className={styles.background}>
          <div className={styles.pokemoninfo}>
            <div className={styles.title}>
              <h2 className={styles.namepokemon}>{name}</h2>
              <h2 className={styles.idpokemon}>{idPoke}</h2>
              <div className={styles.containerpoke}>
                <img className={styles.imagepokemon} src={img} alt='img-pokemon' />
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.habilitysps}>
                <div className={styles.pointsps}>
                  <h3 className={styles.pokemonstats}>PS</h3>
                </div>
                <span className={styles.psnumber}>21/21</span>
              </div>
              <div className={styles.ps}>
                <div className={styles.bar}>
                  <img className={styles.psima} src={ima} alt='a' />  <div className={styles.green} />
                </div>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>ATAQUE</h3>
                </div>
                <span className={styles.number}>21/21</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>DEFENSA</h3>
                </div>
                <span className={styles.number}>21/21</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>AT.ESP.</h3>
                </div>
                <span className={styles.number}>21/21</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>DEF.ESP</h3>
                </div>
                <span className={styles.number}>21/21</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>VELOCID.</h3>
                </div>
                <span className={styles.number}>21/21</span>
              </div>
            </div>
            <button onClick={() => setModal(false)} className={styles.close}>X</button>
          </div>
        </div>}
    </>

  )
}
