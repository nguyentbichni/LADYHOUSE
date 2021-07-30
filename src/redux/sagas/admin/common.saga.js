import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getUserListSaga(action){
  try{
    const response = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/users'
    });
    yield put({
      type: 'ADMIN/GET_USER_LIST_SUCCESS',
      payload: {
        data: response.data
      }
    })
  }catch(e){
    yield put({
      type: 'ADMIN/GET_USER_LIST_FAIL',
      payload:{
        error: e.error
      },
    });
  }
}

function* deleteUserSaga(action){
  try{
    const { id } = action.payload;
    const response = yield axios({
      method: 'GET',
      url: `http://localhost:3001/users/${id}`
    })
    if(response.data.role === 'user'){
      yield axios({
        method: 'DELETE',
        url: `http://localhost:3001/users/${id}`
      });
      yield put({
        type: 'ADMIN/DELETE_USER_SUCCESS',
        payload: { data: {id } },
      })
      yield put({
        type: 'ADMIN/GET_USER_LIST_REQUEST'
      })
    }else{
      console.log('Bạn không được phép xoá')
      yield put({
        type: 'ADMIN/DELETE_USER_FAIL',
      })
    }
  }catch(e){
    console.log("🚀 ~ file: index.js ~ line 287 ~ function*deleteUserSaga ~ e", e)
    yield put({
      type: 'ADMIN/DELETE_USER_FAIL',
      payload: {
        error: e.error
      }
    })
  }
}
export default function* adminCommonSaga() {
  yield takeEvery('ADMIN/GET_USER_LIST_REQUEST', getUserListSaga);
  yield takeEvery('ADMIN/DELETE_USER_REQUEST', deleteUserSaga);
}


