import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getInitialState, getProps } from '../base'
import './style.scss'

function PageName(props) {
  const [data, setData] = useState(getProps(props, 'data', {}));
  getInitialState(props, PageName, { data: setData });
  return <div>
    {/* something to do */}
  </div>
}

PageName.getInitialProps = async (host = '') => {
  const api = '';
  let title= '';
  // 请求数据
  const data = await axios(api);
  return { data , title }
}

export { PageName };
