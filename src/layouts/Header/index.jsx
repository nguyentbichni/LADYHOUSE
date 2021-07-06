import React from 'react';
import './styles.css'

import { connect } from 'react-redux';
import history from "../../util/history";

import logo from '../../assets/logo.webp'

import { FaBars, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa'
import { Input, Space, Button } from 'antd';

function Header({ userInfo }) {
  const { Search } = Input;

  const handleLogout = () =>{
    localStorage.removeItem('userInfo');
    return history.push('/login');
  }

  return (
    <header className="site-header">
      {userInfo.data.id
        ? (
          <Space>
            <p>{`Tên đăng nhập: ${userInfo.data.name}`}</p>
            <Button onClick={() => handleLogout()}>Đăng xuất</Button>
          </Space>
        )
        : (
          <Space size={32}>
            <Button onClick={() => history.push('/login')}>Đăng nhập</Button>
          </Space>
        )
      }
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
                onSearch={(value) => {
                  if (value || history.location.pathname === '/products') {
                    history.push({
                      pathname: '/products',
                      state: {
                        searchKey: value,
                      },
                    })
                  }
                }}
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
const mapStateToProps = (state) => {
  const { userInfo } = state;
  return{
    userInfo,
  }
};
export default connect(mapStateToProps)(Header);