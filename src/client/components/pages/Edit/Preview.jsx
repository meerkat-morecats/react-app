import React, { useRef, useEffect } from 'react';
import './style.scss';

export default function Preview(props) {
    const ref = useRef();

    useEffect(() => {
        ref.current.innerHTML = props.html || '';
    }, [props.html]);
    return <div className={props.hidden ? 'preview-wrapper hidden' : 'preview-wrapper'} ref={ref}></div>;
}
