import React, { useState ,useEffect} from "react";
import { NavLink } from 'react-router-dom'
import './style.scss'


/**
 * @todo 增加标签的展示
 * @param {Array} list
 * @param {Array} tags
 * @param {String} children
 */
function Crumb({ list = [], tags = [], children = 'ls -lR | grep "^-"' }) {
  // const [data, setData] = useState({});
  useTest();
  return <ul className="crumb-wrap">
    <li className="crumb-wrap__item host">visitor@{location.origin}</li>
    {list.map(item => <React.Fragment key={item.to}>
      <li className="crumb-wrap__item blue">/</li>
      <li className="crumb-wrap__item blue">
        <NavLink className="crumb-wrap__item__link" {...item}>{item.title}</NavLink>
      </li>
    </React.Fragment>)}
    <li className="crumb-wrap__item yellow">$</li>
    <li className="crumb-wrap__item cmd">{children}</li>
  </ul>
}

function useTest(){
  const [data,setData]=useState(0);
  console.log('useTest')
  useEffect(()=>{
    setData(1);
  })
  return data;
}

export { Crumb }