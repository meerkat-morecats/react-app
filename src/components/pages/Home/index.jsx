import React, { useState, } from 'react';
// import axios from 'axios';
import { getInitialState, getProps, } from '../base';
import { Link, } from 'react-router-dom';
import { Crumb, } from '../../common/Crumb';
import { LazyList, } from '../../common/LazyList';
import { Tag, } from '../../common/Tag';
import './style.scss';

/**
 * @todo 动态列表渲染数据 或者分页
 * @param {Object} props
 */
// 做的像目录一样
export default function Home(props) {
  const [data, setData,] = useState(getProps(props, 'data', []));
  const [tags, setTags,] = useState(getProps(props, 'tags', []));
  getInitialState(props, Home, { data: setData, tags: setTags, });
  // getInitialState(props, Home, { tags: setTags });
  console.log(tags);
  return (
    <div className="home-wrapper">
      <Crumb title="标签列表"></Crumb>
      <section className="home-wrapper-tags">
        {tags.map(({ tagName, ...tag }) => (
          <Tag key={tagName}>
            <Link className="home-wrapper-tags__link"
              {...tag}
            >
              {tagName}
            </Link>
          </Tag>
        ))}
      </section>

      <Crumb title="文章列表"></Crumb>
      <LazyList data={data} />
    </div>
  );
}

Home.getInitialProps = async () => {
  // const api = '';
  // // 请求数据
  // const data = await axios(api);
  const data = [
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
  ];
  const tags = [
    {
      to: '/node',
      tagName: 'node',
    },
    {
      to: '/react',
      tagName: 'react',
    },
  ];
  return { data, tags, };
};

