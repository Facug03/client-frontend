export const initialize = payload => {
  return {
    type: 'INITIALIZE',
    payload
  }
}

export const searchPokemon = payload => {
  return {
    type: 'SEARCH',
    payload
  }
}

export const resetPage = payload => {
  return {
    type: 'RESET',
    payload
  }
}

export const primaryType = (payload, make) => {
  return {
    type: 'PRIMARY_TYPE',
    payload,
    make
  }
}

export const orderByCreated = payload => {
  return {
    type: 'ORDER_BY_CREATED',
    payload
  }
}

export const orderByOriginal = payload => {
  return {
    type: 'ORDER_BY_ORIGINAL',
    payload
  }
}

export const orderByAll = () => {
  return {
    type: 'ORDER_BY_ALL'
  }
}

export const deleteFilter = (filter, payload) => {
  if (filter === 'type') return orderByStats(payload)
  if (filter === 'order') return primaryType(payload, false)
  if (filter === 'origin') return origins(payload, false)
  return {
    type: 'DELETE_FILTER',
    filter
  }
}

export const orderByStats = stat => {
  if (stat === 'A-Z') {
    return orderByAz
  }

  if (stat === 'Z-A') {
    return orderByZa
  }

  if (stat === 'Hp++') {
    return orderByMaxAttack
  }

  if (stat === 'Hp--') {
    return orderByMinAttack
  }

  if (stat === 'Attack++') {
    return orderByMaxDef
  }

  if (stat === 'Attack--') {
    return orderByMinDef
  }

  if (stat === 'Defense++') {
    return orderByMaxHp
  }

  if (stat === 'Defense--') {
    return orderByMinHp
  }
}

const orderByAz = (payload) => {
  return {
    type: 'ORDER_BY_AZ',
    payload
  }
}

const orderByZa = (payload) => {
  return {
    type: 'ORDER_BY_ZA',
    payload
  }
}

const orderByMaxAttack = (payload) => {
  return {
    type: 'ORDER_BY_MAXATT',
    payload
  }
}

const orderByMinAttack = (payload) => {
  return {
    type: 'ORDER_BY_MINATT',
    payload
  }
}

const orderByMaxDef = (payload) => {
  return {
    type: 'ORDER_BY_MAXDEF',
    payload
  }
}

const orderByMinDef = (payload) => {
  return {
    type: 'ORDER_BY_MINDEF',
    payload
  }
}

const orderByMaxHp = (payload) => {
  return {
    type: 'ORDER_BY_MAXHP',
    payload
  }
}

const orderByMinHp = (payload) => {
  return {
    type: 'ORDER_BY_MINHP',
    payload
  }
}

const origins = (origin, value) => {
  if (origin === 'All') return orderByAll()
  else if (origin === 'Created') return orderByCreated(value)
  else return orderByOriginal(value)
}
