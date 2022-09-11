import Main from './components/Main'
import Nav from './components/Nav'
import React from 'react'
import { Route, Link } from 'react-router-dom'

function App () {
  return (
    <>
      <Route exact path='/'>
        <Nav />
        <Main />
      </Route>
      <Route path='/create'>
        <Link to='/'>
          <p>atras</p>
        </Link>
        <p>hola</p>
      </Route>
    </>
  )
}

export default App
