import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Form from './pages/form'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App