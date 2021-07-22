import React, {useEffect} from "react";
import { connect } from "react-redux";
import {
  Row,
  Table,
  Button,
  Space,
  Drawer,
  Form,
  Input,
  Select,
  Popconfirm,
  List,
  InputNumber,
  Checkbox,
  Card,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import * as Style from './styles';

import { getUserListAction } from "../../../redux/actions"
function UserManagement({
  getUserList,
  userList
}) {

  useEffect(() => {
    getUserList();
  }, [])

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button type="primary" ghost>
              <EditOutlined />
            </Button>
            <Popconfirm
              title={`Bạn có chắc muốn xóa ${record.name}`}
              okText="Xóa"
              cancelText="Hủy"
            >
              <Button danger ><DeleteOutlined /></Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  const renderUserList = () => {
    return userList.data.map((userItem, userIndex) => {
      return(
        <>
          <p>{userItem.name}</p>
          <p>{userItem.email}</p>
        </>
      )
    })
  }

  const tableData = userList.data.map((userItem) => {
    return {
      ...userItem,
      id: userItem.id,
      name: userItem.name,
      email: userItem.email,
      phone: userItem.phone
    }
  })

  return(
    <>
      <p>User Management</p>
      <Table
        columns={tableColumns}
        dataSource={tableData}
      />
    </>
  )
}
const mapStateToProps = (state) => {
  const { userList } = state;
  return {
    userList
  }
}
const mapDispatchToProp = (dispatch) => {
  return{
    getUserList: (params) => dispatch(getUserListAction(params))
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(UserManagement);