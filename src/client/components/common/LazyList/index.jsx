import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';

function LazyList({ data }) {
    return (
        <ul className="lazy-list-wrapper">
            {data.map((item, index) => (
                <li className="lazy-list-wrapper__item" key={index}>
                    <Link className="lazy-list-wrapper__item__link" to={`/article/${item.id}`}>
                        <span className="lazy-list-wrapper__item__date">
                            [
                            {`${item.createTime}`.length === 10
                                ? moment(moment.unix(item.createTime)).format('YYYY.MM.DD')
                                : moment(item.createTime).format('YYYY.MM.DD')}
                            ]
                        </span>
                        <span className="lazy-list-wrapper__item__title">{item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export { LazyList };
