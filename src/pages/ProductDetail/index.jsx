import React, { useState, useEffect } from "react";
import { connect } from "react-redux";


import { Row, Col } from "antd";
import * as Style from "./styles";

import { getProductDetailAction } from "../../redux/actions/index";

function ProductDetail(props) {
  const { getProductDetail, match, productDetail } = props;
  const productId = match.params.id;

  useEffect(() => {
    getProductDetail({ id: productId });
  }, [productId]);
  return (
    <>
      <p>Product Detail</p>
      <p>{productDetail.data.name}</p>
      <p>{productDetail.data.price}</p>
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
    getProductDetail: (params) => dispatch(getProductDetailAction(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
