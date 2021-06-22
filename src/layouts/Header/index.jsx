import React from 'react';
import './styles.css'
import history from "../../util/history";

import logo from '../../assets/logo.webp'

import { FaBars, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa'
import { Input } from 'antd';

function Header() {
  const { Search } = Input;
  return (
    <header className="site-header">
      <div className="header-sticky">
        <div className="header-left">
          <h1>
            <a href="#">
              <img src={logo} style={{ width: "80px" }} onClick={() => history.push(`/`)}></img>
            </a>
          </h1>
          <div>
            <a className="menu">
              <FaBars />
            <div className="site-nav-dropdown">
              <div className="list-item">
                <a href="#" className="categories-title" onClick={() => history.push(`/products/`)}>SKIN CARE</a>
                <ul className="list-branch">
                  <li>Innisfree</li>
                  <li>AHC</li>
                  <li>Neutrogena</li>
                  <li>COSRX</li>
                  <li>Cetaphil</li>
                  <li>Laneige</li>
                  <li>Pond's</li>
                </ul>
              </div>
            </div>
            </a>
          </div>
        </div>
        <div className="header-right">
          <ul className="menu-icons">
            <li>
              <Search
                placeholder="input search text"
                allowClear
                style={{ width: 200, margin: '0 10px' }}
              />
            </li>
            <li><a href="#"><FaUser /></a></li>
            <li><a href="#"><FaShoppingCart /></a></li>
            <li className="last"><a href="#"><FaHeart /></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;