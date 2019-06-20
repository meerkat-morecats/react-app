import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.scss'
const activeStyle = {
  fontWeight: "bold",
  color: 'red'
}

function Nav() {
  const list = [
    {
      to: '/',
      activeStyle: activeStyle,
      exact:true,
      content: 'Home'
    },
    {
      to: '/abc',
      activeStyle: activeStyle,
      content: '123'
    }
  ]
  return <ul className="main-nav">
    {list.map(item => <li className="main-nav__item" key={item.to} >
      <NavLink {...item}>{item.content}</NavLink>
    </li>)}
  </ul>
}

export default Nav

