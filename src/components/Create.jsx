/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios'
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
    url: '',
    primary: '',
    secondary: ''
  })
  const [err, setErr] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    defesp: '',
    atesp: '',
    url: '',
    type: '',
    form: ''
  })

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    const validate = validateSubmit(form)
    if (validate) {
      axios.post('http://localhost:3001/pokemons', {
        pokemon: {
          name: form.name,
          hp: Number(form.hp),
          attack: Number(form.attack),
          defense: Number(form.defense),
          atesp: Number(form.atesp),
          defesp: Number(form.defesp),
          speed: Number(form.speed),
          url: form.url
        },
        primary: form.primary,
        secondary: form.secondary
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    } else {
      setErr({
        ...err,
        name: validateName(form.name),
        hp: validateStats(form.hp),
        attack: validateStats(form.attack),
        defense: validateStats(form.defense),
        speed: validateStats(form.speed),
        defesp: validateStats(form.defesp),
        atesp: validateStats(form.atesp),
        url: validateUrl(form.url),
        type: validateSelect(form.primary, form.secondary),
        form: validateAll(form)
      })
    }
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.formtitle}>Create your Pokemon!</h2>
      <form className={styles.formpoke} onSubmit={handleSubmit}>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.name} className={styles.inputform} autoComplete='off' type='text' name='name' placeholder=' ' autoFocus />
          <label className={styles.labelform}>Name</label>
          <p className={styles.message}>{err.name}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.hp} className={styles.statsform} autoComplete='off' type='text' name='hp' placeholder=' ' />
          <label className={styles.labelform}>Hp</label>
          <p className={styles.message}>{err.hp}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.attack} className={styles.statsform} autoComplete='off' type='text' name='attack' placeholder=' ' />
          <div className={styles.labelform} aria-hidden='true'>Attack</div>
          <p className={styles.message}>{err.attack}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.defense} className={styles.statsform} autoComplete='off' type='text' name='defense' placeholder=' ' />
          <label className={styles.labelform}>Defense</label>
          <p className={styles.message}>{err.defense}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.speed} className={styles.statsform} autoComplete='off' type='text' name='speed' placeholder=' ' />
          <label className={styles.labelform}>Speed</label>
          <p className={styles.message}>{err.speed}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.defesp} className={styles.statsform} autoComplete='off' type='text' name='defesp' placeholder=' ' />
          <label className={styles.labelform}>Defense Esp.</label>
          <p className={styles.message}>{err.defesp}</p>
        </div>
        <div className={styles.inputstyle}>
          <input onChange={handleInput} value={form.atesp} className={styles.statsform} autoComplete='off' type='text' name='atesp' placeholder=' ' />
          <label className={styles.labelform}>Attack Esp.</label>
          <p className={styles.message}>{err.atesp}</p>
        </div>
        <div className={styles.url}>
          <div className={styles.inputstyle}>
            <input onChange={handleInput} value={form.url} className={styles.inputform} autoComplete='off' type='text' name='url' placeholder=' ' />
            <label className={styles.labelform}>Image(url)</label>
            <p className={styles.message}>{err.url}</p>
          </div>
        </div>
        <div />
        <div className={styles.selecttypes}>
          <div className={styles.typescontainer}>
            <h3 className={styles.titletype}>Primary type</h3>
            <select name='primary' defaultValue='Type' onChange={handleInput} className={styles.types}>
              <option value='Type' disabled>Type</option>
              <option value='normal'>normal</option>
              <option value='fighting'>fighting</option>
              <option value='flying'>flying</option>
              <option value='poison'>poison</option>
              <option value='ground'>ground</option>
              <option value='rock'>rock</option>
              <option value='bug'>bug</option>
              <option value='ghost'>ghost</option>
              <option value='steel'>steel</option>
              <option value='fire'>fire</option>
              <option value='water'>water</option>
              <option value='grass'>grass</option>
              <option value='electric'>electric</option>
              <option value='psychic'>psychic</option>
              <option value='ice'>ice</option>
              <option value='dragon'>dragon</option>
              <option value='dark'>dark</option>
              <option value='fairy'>fairy</option>
              <option value='unknown'>unknown</option>
              <option value='shadow'>shadow</option>
            </select>
          </div>
          <div className={styles.typescontainer}>
            <h3 className={styles.titletype}>Secondary type</h3>
            <select name='secondary' defaultValue='Type' onChange={handleInput} className={styles.types}>
              <option value='Type' disabled>Type</option>
              <option value='none'>none</option>
              <option value='normal'>normal</option>
              <option value='fighting'>fighting</option>
              <option value='flying'>flying</option>
              <option value='poison'>poison</option>
              <option value='ground'>ground</option>
              <option value='rock'>rock</option>
              <option value='bug'>bug</option>
              <option value='ghost'>ghost</option>
              <option value='steel'>steel</option>
              <option value='fire'>fire</option>
              <option value='water'>water</option>
              <option value='grass'>grass</option>
              <option value='electric'>electric</option>
              <option value='psychic'>psychic</option>
              <option value='ice'>ice</option>
              <option value='dragon'>dragon</option>
              <option value='dark'>dark</option>
              <option value='fairy'>fairy</option>
              <option value='unknown'>unknown</option>
              <option value='shadow'>shadow</option>
            </select>
          </div>
          <p className={styles.select}>{err.type}</p>
          <p className={styles.select}>{err.form}</p>
        </div>
        <button className={styles.buttoncreate}>Create</button>
      </form>
    </section>
  )
}

const validateSubmit = form => {
  if (!form.name.length || !form.hp.length || !form.attack.length || !form.defense.length || !form.speed.length || !form.defesp.length || !form.atesp.length || !form.url.length || !form.primary.length) {
    return false
  } else {
    const errorMessage = validateName(form.name)
    const errorHp = validateStats(form.hp)
    const errorAttack = validateStats(form.attack)
    const errorDef = validateStats(form.defense)
    const errorSpeed = validateStats(form.speed)
    const errorDefEsp = validateStats(form.defesp)
    const errorAtEsp = validateStats(form.atesp)
    const errorUrl = validateUrl(form.url)
    const errorSelect = validateSelect(form.primary, form.secondary)
    if (errorMessage || errorHp || errorAttack || errorDef || errorSpeed || errorDefEsp || errorAtEsp || errorUrl || errorSelect) return false
    else return true
  }
}

const validateAll = form => {
  const fields = Object.values(form)
  fields.forEach(field => {
    if (!field.length) return 'Todos los campos son obligatorios'
  })
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

const validateSelect = (type, type2) => {
  if (type.length || type2.length) {
    if (type === type2) return 'No puedes tener 2 tipos iguales'
    if (!type) return 'Debes seleccionar un tipo'
  }
}
