import React, { useState, useEffect, } from 'react';
import { Link, } from 'react-router-dom';
import { Tag, } from '../Tag';
import './style.scss';


/**
 * @todo 增加标签的展示
 * @param {Array} list
 * @param {Array} tags
 * @param {String} children
 */

function Crumb({ title, tagName, }) {

  return <ul className="crumb-wrap">
    <li className="crumb-wrap__item yellow">>></li>
    <li className="crumb-wrap__item" >{title}</li>
    <li className="crumb-wrap__item yellow">>></li>
    {!!tagName && <React.Fragment>
      <Tag><span className="crumb-wrap__item__tag">{tagName}</span></Tag>
      <li className="crumb-wrap__item yellow">>></li>
    </React.Fragment>
    }
  </ul>;
}


export { Crumb, };