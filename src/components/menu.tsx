import * as React from 'react';
import IMenu from '../interfaces/menu';
import {Link} from 'gatsby';
import '../styles/index.scss';

const MenuData:IMenu[] = [
  {
    slug:'/',
    title:'Home'
  },
  {
    slug:'/about',
    title:'About'
  },
  {
    slug: '/services',
    title: 'Services'
  },
  {
    slug:'/blog',
    title:'Blog'
  }
]

const Menu = () => (
  <div className="menu">
    <div className="container">
      <ul className="items">
        {MenuData.map((data:IMenu,index:number) => (
          <li className="item" key={index}>
            <Link to={data.slug}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Menu;