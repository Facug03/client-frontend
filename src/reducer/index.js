const initialState = {
  pokemons: [],
  pokemonsFiltered: []
}

export const rootReducer = (state = initialState, action) => {
  if (action.type === 'INITIALIZE') {
    return {
      ...state,
      pokemons: [...action.payload]
    }
  }
  if (action.type === 'PRIMARY_TYPE') {
    if (state.pokemonsFiltered.length > 0 && action.make) {
      if (state.pokemons.find(poke => poke.types[0] === action.payload) || state.pokemons.find(poke => poke.types[1] === action.payload)) {
        return {
          ...state,
          pokemonsFiltered: [...state.pokemonsFiltered.filter(poke => poke.types[0] === action.payload),
            ...state.pokemonsFiltered.filter(poke => poke.types[1] === action.payload)]
        }
      } else {
        return {
          ...state,
          pokemonsFiltered: [{ id: 'noPokemonFound', filter: `There are no Pokemons with type ${action.payload}` }]
        }
      }
    } else {
      if (state.pokemons.find(poke => poke.types[0] === action.payload) || state.pokemons.find(poke => poke.types[1] === action.payload)) {
        return {
          ...state,
          pokemonsFiltered: [...state.pokemons.filter(poke => poke.types[0] === action.payload),
            ...state.pokemons.filter(poke => poke.types[1] === action.payload)]
        }
      } else {
        return {
          ...state,
          pokemonsFiltered: [{ id: 'noPokemonFound', filter: `There are no Pokemons with type ${action.payload}` }]
        }
      }
    }
  }
  if (action.type === 'DELETE_FILTER') {
    if (!action.filter) {
      return {
        ...state,
        pokemonsFiltered: [...state.pokemons]
      }
    }
  }
  if (action.type === 'ORDER_BY_AZ') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const sortArray = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...sortArray.sort(Az)]
      }
    } else {
      const sortArray = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...sortArray.sort(Az)]
      }
    }
  }
  if (action.type === 'ORDER_BY_ZA') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const sortArrayZa = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...sortArrayZa.sort(Az).reverse()]
      }
    } else {
      const sortArrayZa = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...sortArrayZa.sort(Az).reverse()]
      }
    }
  }
  if (action.type === 'ORDER_BY_ALL') {
    return {
      ...state,
      pokemonsFiltered: [...state.pokemons]
    }
  }
  if (action.type === 'SEARCH') {
    if (!state.pokemons.find(poke => poke.name.toLowerCase().includes(action.payload.toLowerCase()))) {
      return {
        ...state,
        pokemonsFiltered: [{ id: 'noPokemonFound', filter: `${action.payload} doesn't exists` }]
      }
    }
    return {
      ...state,
      pokemonsFiltered: [...state.pokemons.filter(poke => poke.name.toLowerCase().includes(action.payload.toLowerCase()))]
    }
  }
  if (action.type === 'ORDER_BY_MAXHP') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const orderHp = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...orderHp.sort((a, b) => a.hp - b.hp).reverse()]
      }
    } else {
      const orderHp = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...orderHp.sort((a, b) => a.hp - b.hp).reverse()]
      }
    }
  }
  if (action.type === 'ORDER_BY_MINHP') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const orderHp = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...orderHp.sort((a, b) => a.hp - b.hp)]
      }
    } else {
      const orderHp = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...orderHp.sort((a, b) => a.hp - b.hp)]
      }
    }
  }
  if (action.type === 'ORDER_BY_MAXATT') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const orderAt = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...orderAt.sort((a, b) => a.hp - b.hp).reverse()]
      }
    } else {
      const orderAt = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...orderAt.sort((a, b) => a.hp - b.hp).reverse()]
      }
    }
  }
  if (action.type === 'ORDER_BY_MINATT') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const orderAt = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...orderAt.sort((a, b) => a.hp - b.hp)]
      }
    } else {
      const orderAt = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...orderAt.sort((a, b) => a.hp - b.hp)]
      }
    }
  }
  if (action.type === 'ORDER_BY_MAXDEF') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const orderDef = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...orderDef.sort((a, b) => a.defense - b.defense).reverse()]
      }
    } else {
      const orderDef = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...orderDef.sort((a, b) => a.defense - b.defense).reverse()]
      }
    }
  }
  if (action.type === 'ORDER_BY_MINDEF') {
    if (state.pokemonsFiltered.length > 0 && action.payload) {
      const orderDef = [...state.pokemonsFiltered]
      return {
        ...state,
        pokemonsFiltered: [...orderDef.sort((a, b) => a.defense - b.defense)]
      }
    } else {
      const orderDef = [...state.pokemons]
      return {
        ...state,
        pokemonsFiltered: [...orderDef.sort((a, b) => a.defense - b.defense)]
      }
    }
  }
  // if (action.type === 'SECONDARY_TYPE') {
  //   const filter = state.filter(poke => poke.types[1] === action.payload)
  //   if (filter.length === 0) return ['There are no pokemons']
  //   return filter
  // }
  return state
}

function Az (a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1
  }
  return 0
}
