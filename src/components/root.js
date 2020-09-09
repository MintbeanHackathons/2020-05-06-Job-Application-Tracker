import React from 'react'
import Home from './Home'
import Form from './Form'
import {Route, Link, Switch} from 'react-router-dom'

const Root = () => {
  return (
    <div className='bodyContainer'>
      <nav>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/form'>New Application</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={Form} />
        </Switch>
      </main>
    </div>
  )
}

export default Root
