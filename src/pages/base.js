import { useEffect } from 'react'

// client render get data function
export function getInitialState(props, component, setFunctions) {
  useEffect(() => {
    // 判断客户端
    if (typeof window !== 'undefined') {
      if (!props.ssrData && component.getInitialProps) {
        component.getInitialProps().then(res => {
          if (data) {
            for (const key in data) {
              if (data[key]) {
                setFunctions[key](data[key])
              }
            }
          }
        })
      }
    }
  })
}

export function getProps(props,key,defaultValue){
  if (props.ssrData) {
    return props.ssrData[key]
  }
  return defaultValue;
}