import React from 'react'
import List from './Components/List/List'
import Add from './Components/Add/Add'

const routes = {
  '/': () => <Add />,
  '/list': () => <List />
}

export default routes