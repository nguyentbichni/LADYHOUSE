import React from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { connect } from 'react-redux';

import history from "../../util/history"; 
import { loginAction } from '../../redux/actions';
function Login({ login }) {
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish = {(values) => login(values)}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row justify="center">
        <Button type="primary" onClick={() => history.push('/register')}>Register</Button>
      </Row>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(loginAction(params)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
