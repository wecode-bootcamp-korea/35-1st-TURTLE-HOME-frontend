import React from 'react';
import './SubCategory.scss';

const SubCategory = () => {
  return (
    <div className="category_box">
      {CATEGORY_LIST.map(list => (
        <div className="category_list" key={list.id}>
          <img src={list.src} />
          <p>{list.title}</p>
        </div>
      ))}
    </div>
  );
};
export default SubCategory;

const CATEGORY_LIST = [
  {
    id: 1,
    title: '침구',
    alt: '침구',
    src: '/images/1.jpg',
  },
  {
    id: 2,
    title: '충전재',
    alt: '충전재',
    src: '/images/2.jpg',
  },
  {
    id: 3,
    title: '차렵이불',
    alt: '차렵이불',
    src: '/images/3.jpg',
  },
  {
    id: 4,
    title: '홑이불',
    alt: '홑이불',
    src: '/images/4.jpg',
  },
  {
    id: 5,
    title: '담요',
    alt: '담요',
    src: '/images/5.jpg',
  },
  {
    id: 6,
    title: '쿠션커버',
    alt: '쿠션커버',
    src: '/images/6.jpg',
  },
  {
    id: 7,
    title: '커튼',
    alt: '커튼',
    src: '/images/7.jpg',
  },
  {
    id: 8,
    title: '러그',
    alt: '러그',
    src: '/images/8.jpg',
  },
];
