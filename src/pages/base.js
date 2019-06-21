import { useEffect } from 'react'

// client render get data function
export function getInitialState(props, component, setFunctions) {
  // 传入第二个参数，这个effect只在第一次渲染，不会根据状态改变二重新渲染
  useEffect(() => {
    // 判断客户端
    if (typeof window !== 'undefined') {
      if (!props.ssrData && component.getInitialProps) {
        component.getInitialProps().then(res => {

          if (res) {
            for (const key in res) {
              if (res[key]) {
                setFunctions[key](res[key])
              }
            }
          }
        })
      }
    }
  }, [1])
}

export function getProps(props, key, defaultValue) {
  if (props.ssrData) {
    return props.ssrData[key]
  }
  return defaultValue;
}