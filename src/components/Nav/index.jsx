import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
const activeStyle = {
  fontWeight: 'bold',
  color: '#d00000',
};

function Nav() {
  const list = [
    {
      to: '/',
      activeStyle: activeStyle,
      exact: true,
      content: '首页',
    },
    {
      to: '/list',
      activeStyle: activeStyle,
      content: '文章列表',
    },
    {
      to: '/edit',
      activeStyle: activeStyle,
      content: '编辑',
    },
  ];
  return (
    <ul className="main-nav">
      {list.map(item => (
        <li className="main-nav__item" key={item.to}>
          <NavLink className="main-nav__item__link" {...item}>
            {item.content}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
