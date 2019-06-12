/**
 * @file app.js
 * ----------
 * File Created: Wednesday, 12th June 2019 10:11:09 pm
 * Last Modified: Wednesday, 12th June 2019 10:46:44 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description 浏览器渲染入口
 */

import React from "react";
import ReactDOM from "react-dom";
// import { Home } from "./views/Home";

function Test() {
  return <div className="test">hello component</div>;
}

function Test2() {
  return <div>hello component test 2</div>;
}

function Home() {
  function handleClick(e) {
    console.log(e);
    alert("123123");
  }
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div className="home">
      <span>hello world!</span>
      <button onClick={handleClick}>click</button>
      <Test />
      <Test2 />
    </div>
  );
}
Home.getInitialState = e => {
  console.log(e);
  return {};
};

ReactDOM.hydrate(<Home />, document.getElementById("root"));
