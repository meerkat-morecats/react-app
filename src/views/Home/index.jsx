const React = require('react');
const { useState } = React;

function Home() {
  function test(){
    alert('test')
  }
  return <div className="home">
    hello world!
    <button onClick={test}>test</button>
  </div>
}

module.exports = Home;