import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Radio, Comment, Avatar, Form, Button, Input, Rate, Card, Tooltip } from "antd";
import moment from "moment";

import * as Style from "./styles";

import { getProductDetailAction, reviewAction } from "../../../redux/actions/index";

function ProductDetail(props) {
  const { getProductDetail, match, productDetail, userInfo, postReview } = props;
  const [optionSelected, setOptionSelected] = useState({});

  const productId = match.params.id;

  useEffect(() => {
    getProductDetail({ id: productId });
  }, []);

  useEffect(() => {
    if (productDetail.data.id) {
      setOptionSelected(productDetail.data.productOptions[0] || {});
    }
  }, [productDetail.data]);

  const handleSubmit = (values) => {
    const newValues = {
      userId: userInfo.data.id,
      productId: productId,
      rate: values.rate,
      comment: values.comment,
      createAt: moment().valueOf(),
    }
    console.log("🚀 ~ file: index.jsx ~ line 36 ~ handleSubmit ~ newValues", newValues);
    postReview(newValues);
  };

  function renderProductOptions() {
    return productDetail.data.productOptions.map((item, index) => {
      return <Radio.Button value={item}>{item.title}</Radio.Button>;
    });
  }

  function renderProductReviews() {
    return productDetail.data.reviews.map((item, index) => {
      return (
        <Comment
          key={index}
          author={<a>{userInfo.data.name}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={userInfo.data.name}
            />
          }
          content={
            <>
              <Rate value={item.rate} disabled />
              <p>{item.comment}</p>
            </>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      )
    });
  }

  return (
    <>
      <p>Product Detail</p>
      <p>{productDetail.data.name}</p>
      <p>{productDetail.data.price + (optionSelected.price || 0)}</p>
      <Radio.Group
        onChange={(e) => setOptionSelected(e.target.value)}
        value={optionSelected}
      >
        {renderProductOptions()}
      </Radio.Group>

      <p>Comments</p>
      {userInfo.data.id && (
        <Card>
          <Form
            name="review"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={(values) => handleSubmit(values)}
          >
            <Form.Item
              label="Rate"
              name="rate"
              rules={[{ required: true, message: "Please input your rate!" }]}
            >
              <Rate />
            </Form.Item>

            <Form.Item
              label="Comment"
              name="comment"
              rules={[{ required: true, message: "Please input your comment!" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
      <Card>
        {renderProductReviews()}
      </Card>
    </>
  );
}
const mapStateToProps = (state) => {
  const { productDetail, userInfo } = state;
  return {
    productDetail,
    userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (params) => dispatch(getProductDetailAction(params)),
    postReview: (params) => dispatch(reviewAction(params))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
