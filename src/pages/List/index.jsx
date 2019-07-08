import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { getInitialState, getProps, } from '../base';
import './style.scss';

function List(props) {
  const [data, setData,] = useState(getProps(props, 'data', {}));
  getInitialState(props, List, { data: setData, });
  return (
    <div className="test">
      <div className="test">list page</div>
      {/* something to do */}
    </div>
  );
}

List.getInitialProps = async () => {
  // const api = '';
  // // 请求数据
  // const data = await axios(api);
  const data = {};
  return { data, };
};

export { List, };
