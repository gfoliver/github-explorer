import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Repository from './components/Repository'
import Profile from './components/Profile'
import GlobalStyle from './styles/Global'

function App() {
  return (
    <>
    <GlobalStyle />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:user/:repo" component={Repository} />
            <Route path="/:user" component={Profile} />
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App