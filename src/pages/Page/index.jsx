import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getInitialState, getProps } from '../base'

function Page(props) {
  const [data, setData] = useState(getProps(props, 'data', {}));
  getInitialState(props, this, { data: setData });
  return <div>
    {/* something to do */}
  </div>
}

Page.getInitialProps = async () => {
  const api = '';
  // 请求数据
  const data = await axios(api);
  return { data }
}

export { Page };
