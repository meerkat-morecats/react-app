import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import axios from '../../../../lib/axios';
import { getInitialState, getProps } from '../base';
import './style.scss';

const getArticle = (host = '', id) => axios.get(`${host}/api/blog/article/${id}`);

function Article(props) {
    const [data, setData] = useState(getProps(props, 'data', {}));
    const ref = useRef('');
    getInitialState(props, Article, { data: setData });
    useEffect(() => {
        getArticle('', props.match.params.id).then((res) => {
            setData(res.data.data);
        });
    }, []);

    return (
        <div className="article-wrapper" ref={ref}>
            <div className="article-wrapper__title">{data.title}</div>
            <div className="article-wrapper__date">
                上传于：
                {`${data.createTime}`.length === 10
                    ? moment(moment.unix(data.createTime)).format('YYYY.MM.DD HH:mm:ss')
                    : moment(data.createTime).format('YYYY.MM.DD HH:mm:ss')}
            </div>
            <div className="article-wrapper__content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
    );
}

Article.getInitialProps = async(host = '', url) => {
    const title = '';
    if (url) {
        const urlArr = url.split('/');
        const data = await getArticle(host, urlArr[urlArr.length - 1]);
        return { data: data.data.data, title: data.data.data.title };
    }
    return { data: null, title };
};

export default withRouter(Article);
