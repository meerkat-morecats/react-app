import React from 'react';
import './style.scss';
import { Link, } from 'react-router-dom';

function LazyList({ data, }) {

  return <ul className="lazy-list-wrapper">
    {data.map((item, index) => <li className="lazy-list-wrapper__item"
      key={index}>
      <a className="lazy-list-wrapper__item__link"
        {...item}>
        <span className="lazy-list-wrapper__item__date">{item.date}</span>
        <span className="lazy-list-wrapper__item__title">
          {item.title}
        </span>
      </a>
    </li>)}

  </ul>;
}

export { LazyList, };