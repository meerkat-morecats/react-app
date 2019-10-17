import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function LazyList({ data }) {
    console.log(data);
    return (
        <ul className="lazy-list-wrapper">
            {data.map((item, index) => (
                <li className="lazy-list-wrapper__item" key={index}>
                    <Link className="lazy-list-wrapper__item__link" to={`/article/${item.id}`} {...item}>
                        <span className="lazy-list-wrapper__item__date">{item.date}</span>
                        <span className="lazy-list-wrapper__item__title">{item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export { LazyList };
