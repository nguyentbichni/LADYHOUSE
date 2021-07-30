import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Radio, Comment, Avatar, Form, Button, Input, Rate, Card, Tooltip } from "antd";
import moment from "moment";

import * as Style from "./styles";

import {
  getProductDetailAction,
  reviewProductAction,
  getReviewListAction,
} from "../../../redux/actions/index";

function ProductDetail({
  getProductDetail,
  match,
  productDetail,
  userInfo,
  reviewProduct,
  getReviewList,
  reviewList,
  actionResponse,
}) {
  const productId = match.params.id;

  const [optionSelected, setOptionSelected] = useState({});

  const [reviewProductForm] = Form.useForm();

  useEffect(() => {
    getProductDetail({ id: productId });
    getReviewList({ id: productId });
  }, []);

  useEffect(() => {
    if (productDetail.data.id) {
      setOptionSelected(productDetail.data.productOptions[0] || {});
    }
  }, [productDetail.data]);

  const handleSubmit = (values) => {
    const data = {
      userId: userInfo.data.id,
      userName: userInfo.data.name,
      productId: productId,
      rate: values.rate,
      comment: values.comment,
      createAt: moment().valueOf(),
    };
    reviewProduct({ data: data });
    reviewProductForm.resetFields();
  };

  function renderProductOptions() {
    return productDetail.data.productOptions.map((item, index) => {
      return <Radio.Button value={item}>{item.title}</Radio.Button>;
    });
  }

  function renderProductReviews() {
    return reviewList.data.map((item, index) => {
      return (
        <Comment
          key={index}
          author={<a>{item.userName}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={item.userName}
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
            form={reviewProductForm}
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
              <Button
                type="primary"
                htmlType="submit"
                loading={actionResponse.reviewProduct.loading}
              >
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
  const { productDetail, reviewList, actionResponse  } = state.userProductReducer;
  const { userInfo } = state.userInfoReducer;
  return {
    productDetail,
    reviewList,
    actionResponse,
    userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (params) => dispatch(getProductDetailAction(params)),
    reviewProduct: (params) => dispatch(reviewProductAction(params)),
    getReviewList: (params) => dispatch(getReviewListAction(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
