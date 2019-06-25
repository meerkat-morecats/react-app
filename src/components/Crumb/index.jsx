import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Tag } from '../Tag'
import './style.scss'


/**
 * @todo 增加标签的展示
 * @param {Array} list
 * @param {Array} tags
 * @param {String} children
 */
// ls -lR | grep "/$" 展示文件夹
function Crumb({ title, tagName }) {
  // const [data, setData] = useState({});
  useTest();
  return <ul className="crumb-wrap">
    <li className="crumb-wrap__item yellow">>></li>
    <li className="crumb-wrap__item" >{title}</li>
    <li className="crumb-wrap__item yellow">>></li>
    {tagName && <React.Fragment>
      <Tag><span className="crumb-wrap__item__tag">{tagName}</span></Tag>
      <li className="crumb-wrap__item yellow">>></li>
    </React.Fragment>
    }
  </ul>
}

function useTest() {
  const [data, setData] = useState(0);
  console.log('useTest')
  useEffect(() => {
    setData(1);
  })
  return data;
}

export { Crumb }