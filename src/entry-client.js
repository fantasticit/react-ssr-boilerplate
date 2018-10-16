import React from 'react'
import { Provider } from 'react-redux'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

// import Loadable from 'react-loadable'

import App from './App'
import createStore from './store'

const store = createStore(window.__INITIAL_STATE__)

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    hydrate(
      <AppContainer>
        <BrowserRouter>
          <Provider store={store}>
            <NextApp />
          </Provider>
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
