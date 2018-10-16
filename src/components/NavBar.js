import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

export default function() {
  const languages = [
    {
      name: 'Home',
      param: '/'
    },
    {
      name: 'About',
      param: '/about'
    }
  ]

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink to={`${param}`}>{name}</NavLink>
        </li>
      ))}
    </ul>
  )
}
