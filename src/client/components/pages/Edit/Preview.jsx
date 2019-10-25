import React, { useRef, useEffect } from 'react';
import './style.scss';

export default function Preview(props) {
    const ref = useRef();

    return (
        <div
            className={props.hidden ? 'preview-wrapper hidden' : 'preview-wrapper'}
            dangerouslySetInnerHTML={{ __html: props.html }}
        ></div>
    );
}
