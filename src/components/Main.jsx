import styles from './Main.module.css'

export default function Main () {
  return (
    <div className={styles.main}>
      <section className={styles.filtro}>izquierda</section>
      <section className={styles.card}>derecha</section>
    </div>
  )
}
