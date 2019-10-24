import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export default function Modal(props) {
    const getDom = () => {
        const id = 'modal';
        let dom = document.querySelector(`#${id}`);
        if (!dom) {
            dom = document.createElement('div');
            dom.id = id;
            document.body.appendChild(dom);
        }
        return dom;
    };
    if (props.visible) {
        return ReactDOM.createPortal(<Child {...props} />, getDom());
    }
    return null;
}


function Child(props) {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current.value);
        props.onSubmit && props.onSubmit(inputRef.current.value);
    };
    return <div className={`modal-wrapper ${props.visible ? '' : 'hidden'}`}>
        <input ref={inputRef}/>
        <button onClick={handleClick}>确定</button>
    </div>;
}
