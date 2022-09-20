/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react'
import styles from './Create.module.css'

export default function Create () {
  const [form, setForm] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    defesp: '',
    atesp: '',
    url: ''
  })

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const errorMessage = validateName(form.name)
  const errorHp = validateStats(form.hp)
  const errorAttack = validateStats(form.attack)
  const errorDef = validateStats(form.defense)
  const errorSpeed = validateStats(form.speed)
  const errorDefEsp = validateStats(form.defesp)
  const errorAtEsp = validateStats(form.atesp)
  const errorUrl = validateUrl(form.url)

  const handleSubmit = (ev) => {
    console.log(ev)
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.formtitle}>Create your Pokemon!</h2>
      <form
        className={styles.formpoke} onSubmit={ev => {
          ev.preventDefault()
          handleSubmit(ev)
        }}
      >
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.name} className={styles.inputform} autoComplete='off' type='text' name='name' placeholder=' ' autoFocus />
          <label className={styles.labelform}>Name</label>
          <p className={styles.message}>{errorMessage}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.hp} className={`${styles.statsform} ${errorMessage && 'danger'}`} autoComplete='off' type='text' name='hp' placeholder=' ' />
          <label className={styles.labelform}>Hp</label>
          <p className={styles.message}>{errorHp}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.attack} className={`${styles.statsform} ${errorMessage && 'danger'}`} autoComplete='off' type='text' name='attack' placeholder=' ' />
          <div className={styles.labelform} aria-hidden='true'>Attack</div>
          <p className={styles.message}>{errorAttack}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.defense} className={`${styles.statsform} ${errorMessage && 'danger'}`} autoComplete='off' type='text' name='defense' placeholder=' ' />
          <label className={styles.labelform}>Defense</label>
          <p className={styles.message}>{errorDef}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.speed} className={`${styles.statsform} ${errorMessage && 'danger'}`} autoComplete='off' type='text' name='speed' placeholder=' ' />
          <label className={styles.labelform}>Speed</label>
          <p className={styles.message}>{errorSpeed}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.defesp} className={`${styles.statsform} ${errorMessage && 'danger'}`} autoComplete='off' type='text' name='defesp' placeholder=' ' />
          <label className={styles.labelform}>Defense Esp.</label>
          <p className={styles.message}>{errorDefEsp}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.atesp} className={`${styles.statsform} ${errorMessage && 'danger'}`} autoComplete='off' type='text' name='atesp' placeholder=' ' />
          <label className={styles.labelform}>Attack Esp.</label>
          <p className={styles.message}>{errorAtEsp}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.url} className={styles.inputform} autoComplete='off' type='text' name='url' placeholder=' ' />
          <label className={styles.labelform}>Image(url)</label>
          <p className={styles.message}>{errorUrl}</p>
        </div>
        <div />
        <div className={styles.selecttypes}>
          <div className={styles.typescontainer}>
            <h3 className={styles.titletype}>Primary type</h3>
            <select defaultValue='Type' onChange={e => console.log(e.target.value)} className={styles.types}>
              <option value='Type' disabled>Type</option>
              <option value='normal'>normal</option>
              <option value='normal'>fighting</option>
              <option value='normal'>flying</option>
              <option value='normal'>poison</option>
              <option value='poison'>ground</option>
              <option value='normal'>rock</option>
              <option value='normal'>bug</option>
              <option value='normal'>ghost</option>
              <option value='normal'>steel</option>
              <option value='normal'>fire</option>
              <option value='normal'>water</option>
              <option value='normal'>grass</option>
              <option value='normal'>electric</option>
              <option value='normal'>psychic</option>
              <option value='normal'>ice</option>
              <option value='normal'>dragon</option>
              <option value='normal'>dark</option>
              <option value='normal'>fairy</option>
              <option value='normal'>unknown</option>
              <option value='normal'>shadow</option>
            </select>
          </div>
          <div className={styles.typescontainer}>
            <h3 className={styles.titletype}>Secondary type</h3>
            <select defaultValue='Type' onChange={e => console.log(e.target.value)} className={styles.types}>
              <option value='Type' disabled>Type</option>
              <option value='normal'>normal</option>
              <option value='normal'>fighting</option>
              <option value='normal'>flying</option>
              <option value='normal'>poison</option>
              <option value='poison'>ground</option>
              <option value='normal'>rock</option>
              <option value='normal'>bug</option>
              <option value='normal'>ghost</option>
              <option value='normal'>steel</option>
              <option value='normal'>fire</option>
              <option value='normal'>water</option>
              <option value='normal'>grass</option>
              <option value='normal'>electric</option>
              <option value='normal'>psychic</option>
              <option value='normal'>ice</option>
              <option value='normal'>dragon</option>
              <option value='normal'>dark</option>
              <option value='normal'>fairy</option>
              <option value='normal'>unknown</option>
              <option value='normal'>shadow</option>
            </select>
          </div>
        </div>
        <button className={styles.buttoncreate}>Create</button>
      </form>
    </section>
  )
}

const validateName = name => {
  if (name.length) {
    if (name.length > 10) return '10 caracteres como maximo'
    if (!/^[a-z ,.'-]+$/i.test(name)) return 'Ingresa un nombre valido'
  }
}

const validateStats = stat => {
  if (stat.length > 3) return 'No puede superar los 3 digitos'
  if (!/^[0-9]*$/.test(stat)) return 'Solo numeros'
}

const validateUrl = url => {
  if (url.length) {
    if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(url)) return 'Url invalida'
  }
}
