import styles from './App.css'

import React, { Component } from 'react'

import Router from './router'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className={styles.content}>
        <NavBar />
        <Router />
      </div>
    )
  }
}

export default App
