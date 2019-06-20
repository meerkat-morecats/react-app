import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getInitialState, getProps } from '../base'
import './index.scss'

function PageName(props) {
  const [data, setData] = useState(getProps(props, 'data', {}));
  getInitialState(props, this, { data: setData });
  return <div>
    {/* something to do */}
  </div>
}

PageName.getInitialProps = async () => {
  const api = '';
  // 请求数据
  const data = await axios(api);
  return { data }
}

export { PageName };
