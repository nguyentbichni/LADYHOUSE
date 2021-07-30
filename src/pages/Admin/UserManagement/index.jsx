import React, {useEffect} from "react";
import { connect } from "react-redux";
import {
  Table,
  Button,
  Space,
  Popconfirm,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import * as Style from './styles';

import { getUserListAction, deleteUserAction } from "../../../redux/actions"
function UserManagement({
  getUserList,
  userList,
  deleteUser,
}) {
  console.log("🚀 ~ file: index.jsx ~ line 21 ~ userList", userList)

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
              onConfirm={() => deleteUser({ id: record.id })}
            >
              <Button danger ><DeleteOutlined /></Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

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
      <h1>User Management</h1>
      <Table
        columns={tableColumns}
        dataSource={tableData}
      />
    </>
  )
}
const mapStateToProps = (state) => {
  const { userList } = state.adminCommonReducer;
  return {
    userList
  }
}
const mapDispatchToProp = (dispatch) => {
  return{
    getUserList: (params) => dispatch(getUserListAction(params)),
    deleteUser: (params) => dispatch(deleteUserAction(params)),
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(UserManagement);