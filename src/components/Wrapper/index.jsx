/**
 * @description 高阶组件，注入表头， 默认值方法的同意注入 
 */
import React, { useEffect } from 'react'
function Wrapper(CurrentComponent) {
  return function C() {
    return <CurrentComponent />
  }
}

export default Wrapper;