import { createStore } from 'redux'
import rootReducrer from './reducer'

export default function(initialState) {
  const store = createStore(rootReducrer, initialState)

  if (module.hot) {
    const nextRootReducer = require('./reducer').default

    store.replaceReducer(nextRootReducer)
  }

  return store
}
