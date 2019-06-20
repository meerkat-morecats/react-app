import React, { useState } from 'react';
// import axios from 'axios';
// import { getInitialState, getProps } from '../base';
import './style.scss';

function Home(props) {
  // const [data, setData] = useState(getProps(props, 'data', {}));
  // getInitialState(props, this, { data: setData });
  return <div>Home Page</div>;
}

Home.getInitialProps = async () => {
  // const api = '';
  // // 请求数据
  // const data = await axios(api);
  // return { data };
};

export { Home };
