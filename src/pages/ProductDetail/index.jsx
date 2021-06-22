import React, { useState, useEffect } from "react";
import { connect } from "react-redux";


import { Row, Col } from "antd";
import * as Style from "./styles";

import { getProductDetail } from "../../redux/actions/index";

function ProductDetail(props) {
  const { getProductDetail, productDetail, match } = props;
  const productId = match.params.id;

  useEffect(() => {
    getProductDetail({ id: productId });
  }, [productId]);

  // const renderProductDetail = () => {
  //   return productDetail.map((product, productIndex) => (
  //     <>
  //       <p>{product.id}</p>
  //       <p>{product.name}</p>
  //     </>
  //   ));
  // }; sai
  return (
    <>
      <div>
        {/* <Text xxxl w3>
        Hello
      </Text>
      <Style.CustomButton>Hello</Style.CustomButton> */}
        <Row>
          <Col span={24}>
            <Style.Breadcrumb>
              <nav>
                <h1>Skin Care</h1>
                <span>
                  <a href="#">Home</a> <span>-</span> <span>Skin care</span>
                </span>
              </nav>
            </Style.Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <div className="left-sidebar">
              <div className="collection-sidebar">
                <div className="collection-sidebar-item">
                  <h4>Category</h4>
                  <hr />
                  <ul>
                    <li className="category-item">
                      <a href="#">Beauty Care</a>
                    </li>
                    <li className="category-item">
                      <a href="#">Hair Care</a>
                    </li>
                    <li className="category-item">
                      <a href="#">Skin Care</a>
                    </li>
                    <li className="category-item">
                      <a href="#">Face Care</a>
                    </li>
                  </ul>
                </div>
                <div className="collection-sidebar-item">
                  <h4>Shop by Weight</h4>
                  <hr />
                  <ul>
                    <li className="category-item">
                      <a href="#">100 ml </a>
                    </li>
                    <li className="category-item">
                      <a href="#">150 ml</a>
                    </li>
                    <li className="category-item">
                      <a href="#">200 ml</a>
                    </li>
                    <li className="category-item">
                      <a href="#">250 ml</a>
                    </li>
                    <li className="category-item">
                      <a href="#">300 ml</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <div className="right-collection">
              <div className="collection-grid">
                <header className="section-header">Detail</header>
                <div>
                  <p>{productDetail.id}</p>
                  <p>{productDetail.name}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const { productDetail } = state;
  return {
    productDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (params) => dispatch(getProductDetail(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
