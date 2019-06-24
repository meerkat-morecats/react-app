import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { getInitialState, getProps } from '../base';
import { Link } from 'react-router-dom'
import { Crumb } from '../../components/Crumb'
import './style.scss';


/**
 * @todo 动态列表渲染数据 或者分页
 * @param {Object} props 
 */
// 做的像目录一样
function Home(props) {
  const [data, setData] = useState(getProps(props, 'data', []));
  const [crumbs, setCrumbs] = useState([
    {
      title: '首页',
      to: '/',
      exact: true,
    },
    // {
    //   title: '标签',
    //   to: '/tag',
    //   exact: true,
    // }
  ]);
  getInitialState(props, Home, { data: setData });
  useEffect(() => {
    // console.log(props)
  })
  return <div className="home-wrapper">
    <Crumb list={crumbs} ></Crumb>
    <section className="home-wrapper__list">
        <Link to="/">title</Link>
    </section>
  </div>;
}

Home.getInitialProps = async () => {
  // const api = '';
  // // 请求数据
  // const data = await axios(api);
  const data = []
  return { data };
};

export { Home };
