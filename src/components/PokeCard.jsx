import { useState } from 'react'
import Pokemon from './Pokemon'
import styles from './PokeCard.module.css'
import { typeColor, typeText } from '../helpers/typeColor'

export default function PokeCard ({ id, name, types }) {
  const [modal, setModal] = useState(false)
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
  let idPoke = ''

  if (id.toString().length === 1) {
    idPoke = `N.º 00${id}`
  } else if (id.toString().length === 2) {
    idPoke = `N.º 0${id}`
  } else {
    idPoke = `N.º ${id}`
  }

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.pokecard}>
        <div className={styles.detailright} />
        <div className={styles.detailleft} />
        <img onClick={() => setModal(true)} className={styles.imagepoke} src={img} alt='pokemon' />
      </div>
      <div className={styles.middledetail}>
        <hr />
        <hr />
        <hr />
      </div>
      <div className={styles.data}>
        <span onClick={() => setModal(true)} className={styles.idpoke}>{idPoke}</span>
        <h3 onClick={() => setModal(true)} className={styles.namepoke}>{name}</h3>
        <span style={{ backgroundColor: typeColor(types[0]), color: typeText(types[0]) }} className={styles.type}>{types[0]}</span>{types[1] && <span style={{ backgroundColor: typeColor(types[1]), color: typeText(types[1]) }} className={styles.type2}>{types[1]}</span>}
      </div>
      <Pokemon
        color={typeColor(types[0])}
        id={id}
        idPoke={idPoke}
        name={name}
        img={img}
        modal={modal}
        setModal={setModal}
      />
    </div>
  )
}
