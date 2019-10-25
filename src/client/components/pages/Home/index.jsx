import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getInitialState, getProps } from '../base';
import { Crumb } from '../../common/Crumb';
import { LazyList } from '../../common/LazyList';
import { Tag } from '../../common/Tag';
import Header from '../../common/Header';
import './style.scss';

/**
 * @todo 动态列表渲染数据 或者分页
 * @param {Object} props
 */
// 做的像目录一样
export default function Home(props) {
    const [data, setData] = useState(getProps(props, 'data', []));
    // const [tags, setTags] = useState(getProps(props, 'tags', []));
    // getInitialState(props, Home, { data: setData, tags: setTags });
    getInitialState(props, Home, { data: setData });

    // getInitialState(props, Home, { tags: setTags });
    return (
        <div className="home-wrapper">
            <Header />
            {/* <Crumb title="标签列表"></Crumb>
            <section className="home-wrapper-tags">
                {tags.map(({ tagName, ...tag }) => (
                    <Tag key={tagName}>
                        <Link className="home-wrapper-tags__link" {...tag}>
                            {tagName}
                        </Link>
                    </Tag>
                ))}
            </section> */}
            <Crumb title="文章列表"></Crumb>
            <LazyList data={data} />
        </div>
    );
}

Home.getInitialProps = async(host = '') => {
    // const api = '';
    // // 请求数据
    // const data = await axios(api);
    let ssrData = null;
    await axios.get(`${host}/api/blog/list/`).then((res) => {
        ssrData = res.data;
    });
    ssrData.title = '康凯的技术日记';
    return ssrData;
    // return ssrData;
};
