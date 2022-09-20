// import { useEffect, useState } from 'react'
import styles from './Pokemon.module.css'
import ima from '../img/ps.png'

export default function Pokemon ({
  color,
  id,
  idPoke,
  name,
  img,
  modal,
  setModal,
  hp,
  attack,
  defense,
  specialAt,
  specialDef,
  speed
}) {
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
                <span className={styles.psnumber}>{hp}/{hp}</span>
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
                <span className={styles.number}>{attack}</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>DEFENSA</h3>
                </div>
                <span className={styles.number}>{defense}</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>AT.ESP.</h3>
                </div>
                <span className={styles.number}>{specialAt}</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>DEF.ESP</h3>
                </div>
                <span className={styles.number}>{specialDef}</span>
              </div>
              <div className={styles.habilitys}>
                <div className={styles.points}>
                  <h3 className={styles.pokemonstats}>VELOCID.</h3>
                </div>
                <span className={styles.number}>{speed}</span>
              </div>
            </div>
            <button onClick={() => setModal(false)} className={styles.close}>X</button>
          </div>
        </div>}
    </>

  )
}
