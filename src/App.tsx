import * as React from 'react'
import Logo from './assets/logo.png'
import './app.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <img src={Logo} alt="logo" />
          <p>Welcome to React</p>
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}
