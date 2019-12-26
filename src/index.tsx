import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'wouter'
import Home from './components/home'
import Sandbox from './components/sandbox'
import './styles.scss'

const App = () => (
  <>
    <Route path="/" component={Home} />
    <Route path="/sandbox" component={Sandbox} />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
