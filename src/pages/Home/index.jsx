import React, { useState } from 'react';
// import axios from 'axios';
import { getInitialState, getProps } from '../base';
import './style.scss';

// 做的像目录一样
function Home(props) {
  const [data, setData] = useState(getProps(props, 'data', {}));
  getInitialState(props, Home, { data: setData });
  return <div className="home-wrapper">
      <section className="home-wrapper__list">列表</section>
  </div>;
}

Home.getInitialProps = async () => {
  // const api = '';
  // // 请求数据
  // const data = await axios(api);
  const data = {}
  return { data };
};

export { Home };
