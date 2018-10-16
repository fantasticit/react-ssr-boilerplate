import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'

// import Home from '../components/Home'
import About from '../components/About'
import NoMatch from '../components/NoMatch'

const Loading = () => <div>loading...</div>

const Home = Loadable({
  loading: Loading,
  delay: 5000,
  loader: () => import(/* webpackChunkName: 'Home' */ '../components/Home')
})

// TODO: dynamic import
// const Home = import(/* webpackChunkName: 'Home' */ '../components/Home')
// const About = import(/* webpackChunkName: 'About' */ '../components/About')
// const NoMatch = import(/* webpackChunkName: 'Nomatch' */ '../components/NoMatch')

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export default function() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route component={NoMatch} />
    </Switch>
  )
}
