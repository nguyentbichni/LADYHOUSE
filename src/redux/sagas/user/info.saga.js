import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../../util/history';

function* loginSaga(action){
  try {
    const { email, password } = action.payload;
    // http://localhost:3001/users?email=nguyentbichni&password=ni2401
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/users',
      params: {
        email,
        password,
      }
    });
    if (result.data.length > 0) {
      localStorage.setItem('userInfo', JSON.stringify(result.data[0]));
      yield put({
        type: "LOGIN_SUCCESS",
        payload: {
          data: result.data[0],
        },
      });
      if (result.data[0].role === 'user') {
        yield history.push('/');
      } else {
        yield history.push('/admin/user-management');
      }
    } else {
      yield put({
        type: "LOGIN_FAIL",
        payload: {
          error: 'Email hoặc mật khẩu không đúng',
        },
      });
    }
  } catch (e) {
    yield put({
      type: "LOGIN_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* registerSaga(action){
  try{
    const { email, password, phone, name} = action.payload;
    const emailArray = yield axios({
      method: 'GET',
      url: `http://localhost:3001/users?email=${email}`,
    })
    if(emailArray.data.length > 0){
      console.log("Đã tồn tại");
    }else{
      const response = yield axios({
        method: 'POST',
        url: 'http://localhost:3001/users',
        data: {
          email,
          password,
          name,
          phone,
          role: 'user',
          cart: [],
        }
      });
      yield put({
        type: 'REGISTER_SUCCESS',
        payload: {
          data: response.data,
        }
      });
    }
  }catch(e){
    yield put({
      type: 'REGISTER__FAIL',
      payload: {
        error: e.error,
      },
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axios.get(`http://localhost:3001/users/${id}`);
    yield put({
      type: 'GET_USER_INFO_REQUEST_SUCCESS',
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    yield put({
      type: 'GET_USER_INFO_REQUEST_FAIL',
      payload: {
        error: e.error
      },
    });
  }
}

export default function* userInfoSaga() {
  yield takeEvery('LOGIN_REQUEST', loginSaga);
  yield takeEvery('REGISTER_REQUEST', registerSaga);
  yield takeEvery('GET_USER_INFO_REQUEST', getUserInfoSaga);
}
