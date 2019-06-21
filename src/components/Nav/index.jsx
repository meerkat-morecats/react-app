import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Nav() {
  const list = [
    {
      to: '/',
      exact: true,
      content: '首页',
    },
    // {
    //   to: '/list',
    //   content: '文章列表',
    // },
    {
      to: '/edit',
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

export default {Nav};
