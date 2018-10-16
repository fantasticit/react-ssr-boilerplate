import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'

import App from './App'
import createStore from './store'
import { routes } from './router'

function serverRender(req) {
  const MatchedComponent = routes.find(route => matchPath(req.url, route)) || {} // 用于初始化获取数据

  // redux 初始 state
  const store = createStore()
  const state = JSON.stringify(store.getState())

  const page = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )

  return { page, state }
}

export default serverRender
