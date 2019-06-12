const React = require('react');

const {useEffect} = React;
 
import MyComponent from './component'

function Test() {
  return <div className="test">hello component</div>
}

function Test2() {
  return <div>hello component test 2</div>
}

function Home() {
  function handleClick(e) { 
    console.log(e);
    alert('123123')
  }
  useEffect(()=>{
    console.log('useEffect')
  })
  return (<div className="home">
    <span>hello world!</span>
    <button onClick={handleClick}>click</button>
    <Test />
    <Test2 />
    <MyComponent />
  </div>)
}
Home.getInitialState=(e)=>{
  console.log(e)
  return {}
}


module.exports = Home;