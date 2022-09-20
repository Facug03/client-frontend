import React from 'react'
import Main from './components/Main'
import Nav from './components/Nav'
import Pokemon from './components/Pokemon'
import Create from './components/Create'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import { usePokemon } from './hooks/usePokemon'

function App () {
  usePokemon()

  return (
    <>
      <Nav />
      <Route exact path='/'>
        <Main />
        <Pokemon />
        <Footer />
      </Route>
      <Route path='/create'>
        <Create />
      </Route>
    </>
  )
}

export default App
