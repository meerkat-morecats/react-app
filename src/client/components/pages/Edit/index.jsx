import React, { useEffect, useState, useRef } from 'react';
import marked from 'marked';
import axios from '../../../../lib/axios';
import Preview from './Preview';
import './style.scss';

function Edit(props) {
    // const [data, setData] = useState(getProps(props, 'data', {}));
    // getInitialState(props, Edit, { data: setData });
    const [html, setHtml] = useState();
    const [showPreview, setShowPreview] = useState(true);
    const divRef = useRef();
    const paramsRef = useRef({});

    const inputChange = (e) => {
        const _html = marked(e.target.value);
        paramsRef.current.content = _html;
        setHtml(_html);
    };

    const titleChange = (e) => {
        paramsRef.current.title = e.target.value;
    };

    const changePreviewsState = (state) => {
        setShowPreview(state);
    };

    /**
     * @todo 增加弹窗，输入验证码，提交
     */
    const upload = () => {};

    useEffect(() => {
        divRef.current.style.height = `${document.body.clientHeight - 30}px`;
    }, []);

    return (
        <div className="edit-wrapper" ref={divRef}>
            <div className="edit-wrapper__operate">
                {showPreview ? (
                    <div
                        className={'edit-wrapper__operate__btn'}
                        title="预览"
                        onClick={() => changePreviewsState(false)}
                    >
                        <svg
                            t="1571206722918"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2066"
                            width="100%"
                            height="100%"
                        >
                            <path
                                d="M512 608a96 96 0 1 1 0-192 96 96 0 0 1 0 192m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160"
                                fill="#75dab7"
                                p-id="2067"
                            ></path>
                            <path
                                d="M512 800c-212.064 0-384-256-384-288s171.936-288 384-288 384 256 384 288-171.936 288-384 288m0-640C265.248 160 64 443.008 64 512c0 68.992 201.248 352 448 352s448-283.008 448-352c0-68.992-201.248-352-448-352"
                                fill="#75dab7"
                                p-id="2068"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <div
                        className={'edit-wrapper__operate__btn'}
                        title="隐藏"
                        onClick={() => changePreviewsState(true)}
                    >
                        <svg
                            t="1571206792958"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2968"
                            width="100%"
                            height="100%"
                        >
                            <path
                                d="M512 800c-66.112 0-128.32-24.896-182.656-60.096l94.976-94.976A156.256 156.256 0 0 0 512 672c88.224 0 160-71.776 160-160a156.256 156.256 0 0 0-27.072-87.68l101.536-101.536C837.28 398.624 896 493.344 896 512c0 32-171.936 288-384 288m96-288a96 96 0 0 1-96 96c-14.784 0-28.64-3.616-41.088-9.664l127.424-127.424c6.048 12.448 9.664 26.304 9.664 41.088M128 512c0-32 171.936-288 384-288 66.112 0 128.32 24.896 182.656 60.096L277.536 701.216C186.72 625.376 128 530.656 128 512m664.064-234.816l91.328-91.328-45.248-45.248-97.632 97.632C673.472 192.704 595.456 160 512 160 265.248 160 64 443.008 64 512c0 39.392 65.728 148.416 167.936 234.816l-91.328 91.328 45.248 45.248 97.632-97.632C350.528 831.296 428.544 864 512 864c246.752 0 448-283.008 448-352 0-39.392-65.728-148.416-167.936-234.816"
                                fill="#75dab7"
                                p-id="2969"
                            ></path>
                            <path
                                d="M512 352c-88.224 0-160 71.776-160 160 0 15.328 2.848 29.856 6.88 43.872l58.592-58.592a95.616 95.616 0 0 1 79.808-79.808l58.592-58.592A157.76 157.76 0 0 0 512 352"
                                fill="#75dab7"
                                p-id="2970"
                            ></path>
                        </svg>
                    </div>
                )}
                <div className="edit-wrapper__operate__btn" onClick={upload} title="上传">
                    <svg
                        t="1571206821613"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3150"
                        width="100%"
                        height="100%"
                    >
                        <path
                            d="M832 128H128v128h64V192h640v64h64V128zM201.376 585.376l45.248 45.248L480 397.248V896h64V397.248l233.376 233.376 45.248-45.248L512 274.752z"
                            fill="#75dab7"
                            p-id="3151"
                        ></path>
                    </svg>
                </div>
                {/* <div className="edit-wrapper__operate__btn" title="">
                    <svg
                        t="1571206849112"

                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3331"
                        width="100%"
                        height="100%"
                    >
                        <path
                            d="M128 896h768v-64H128zM256 704v-146.752l224-224L626.752 480l-224 224H256zM608 205.248L754.752 352 672 434.752 525.248 288 608 205.248z m214.624 169.408l0.032-0.032a32 32 0 0 0 0-45.248l-0.032-0.032-191.968-191.968-0.032-0.032a32 32 0 0 0-45.248 0l-0.032 0.032L192 530.752V768h237.248l393.376-393.344z"
                            fill="#75dab7"
                            p-id="3332"
                        ></path>
                    </svg>
                </div> */}
            </div>
            <div className="textarea-wrapper">
                <input placeholder="请输入标题" className="title-input" onChange={titleChange} />
                <textarea id="textarea" wrap="hard" onChange={inputChange}></textarea>
            </div>
            <Preview html={html} hidden={!showPreview} />
        </div>
    );
}

Edit.getInitialProps = async(host = '') => {
    const data = {};
    const title = '编辑文章';
    return { data, title };
};

export { Edit };
