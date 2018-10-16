const initialState = {
  count: 0
}

export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }

    case 'DECREMENT':
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}
