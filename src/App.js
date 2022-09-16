import React from 'react'
import Main from './components/Main'
import Nav from './components/Nav'
import Pokemon from './components/Pokemon'
import Create from './components/Create'
import { Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Nav />
      <Route exact path='/'>
        <Main />
        <Pokemon />
      </Route>
      <Route path='/create'>
        <Create />
      </Route>
    </>
  )
}

export default App
