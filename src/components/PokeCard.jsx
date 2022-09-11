import styles from './PokeCard.module.css'

export default function PokeCard ({ id, name, type, img }) {
  let idPoke = ''

  if (id.length === 1) {
    idPoke = `N.º 00${id}`
  } else if (id.length === 2) {
    idPoke = `N.º 0${id}`
  } else {
    idPoke = `N.º ${id}`
  }

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.pokecard}>
        <img className={styles.imagepoke} src={img} alt='pokemon' />
      </div>
      <div className={styles.data}>
        <span className={styles.idpoke}>{idPoke}</span>
        <h3 className={styles.namepoke}>{name}</h3>
        <span className={styles.type}>{type}</span>
      </div>
    </div>
  )
}
