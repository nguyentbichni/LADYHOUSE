import React, { useState, useEffect } from "react";
import { connect } from "react-redux";


import { Radio, Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import { HeartOutlined } from '@ant-design/icons';
import moment from 'moment';

import * as Style from "./styles";

import { getProductDetailAction } from "../../../redux/actions/index";

function ProductDetail(props) {
  const { getProductDetail, match, productDetail } = props;
  const [ optionSelected, setOptionSelected ] = useState({});
  const [ comments, setComments ] = useState([]);
  const [ submitComment, setSubmitComment ] = useState(false);
  const [ commentValue, setCommentValue ] = useState('');
  const productId = match.params.id;

  useEffect(() => {
    getProductDetail({ id: productId });
  }, []);

  useEffect(() => {
    if(productDetail.data.id){
      setOptionSelected(productDetail.data.productOptions[0] || {})
    }
  }, [productDetail.data])


  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  const { TextArea } = Input;
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
  
  const handleSubmit = () => {
    if (!commentValue) {
      return;
    }
    setTimeout(() => {
      setSubmitComment(false);
      setCommentValue('');
      setComments([
          ...comments,
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      )
    }, 1000);
  };

  const handleChange = e => {
    const { value } = e.target;
    setCommentValue(value);
  };

  function renderProductOptions(){
    return productDetail.data.productOptions.map((item, index) => {
      return(
        <Radio.Button value={item}>
          {item.title}
        </Radio.Button>
      )
    })
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
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={(e) => handleChange(e)}
              onSubmit={(e) => handleChange(e)}
              submitting={submitComment}
              value={commentValue}
            />
          }
        />

        <p>Rating</p>
        <Rate character={<HeartOutlined />} allowHalf allowClear={false} defaultValue={3}  />
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
