import { useEffect } from 'react';

// client render get data function
export function getInitialState(props, component, setFunctions) {
    // 传入第二个参数，这个effect只在第一次渲染，不会根据状态改变二重新渲染
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // 判断客户端
        if (typeof window !== 'undefined') {
            if (!props.ssrData && component.getInitialProps) {
                component.getInitialProps().then((res) => {
                    const keys = Object.keys(res);
                    if (res) {
                        keys.forEach((k) => {
                            if (res[k]) {
                                setFunctions[k](res[k]);
                            }
                        });
                    }
                });
            }
        }
    }, []);
}

export function getProps(props, key, defaultValue) {
    if (props.ssrData) {
        return props.ssrData[key];
    }
    return defaultValue;
}
