import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../util/history';

function* getProductSaga(action) {
  try {
    const { page, limit, categoryId, searchKey ,more } = action.payload;
    // const response = yield axios.get('http://localhost:3001/products?_expand=category&_embed=productOptions');
    // const categoryData = categoryId ? { categoryId: categoryId } : {};
    const response = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/products',
      params: {
        _expand: 'category',
        _embed: 'productOptions',
        _page: page,
        _limit: limit,
        // ...categoryData
        ...categoryId && { categoryId },
        ...searchKey && { q: searchKey },
      }
    });
    yield put({
      type: 'GET_PRODUCTS_SUCCESS',
      payload: {
        data: response.data,
        page,
        more
      }
    });
  } catch (error) {
    yield put({
      type: 'GET_PRODUCTS_FAIL',
      payload: {
        error: error.error
      }
    });
  }
}

function* getCategoryListSaga(action){
  try{
    const response = yield axios.get(`http://localhost:3001/categories`);
    yield put({
      type: 'GET_CATEGORY_LIST_SUCCESS',
      payload: {
        data: response.data,
      }
    });
  } catch(error){
    yield put({
      type: 'GET_CATEGORY_LIST_FAIL',
      payload: {
        error: error.error
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload
    // const response = yield axios.get(`http://localhost:3001/products/${id}`);
    const response = yield axios({
      method: 'GET',
      url: `http://localhost:3001/products/${id}`,
      params: {
        _embed: 'productOptions',
      }
    })
    yield put({
      type: 'GET_PRODUCTS_DETAIL_SUCCESS',
      payload: {
        data: response.data
      },
    });
  } catch (error) {
    yield put({
      type: 'GET_PRODUCTS_DETAIL_FAIL',
      payload: {
        error: error.error,
      },
    });
  }
}

function* loginSaga(action){
  try{
    const {email, password} = action.payload;
    const response = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/users',
      params:{
        email,
        password,
      }
    });
    if(response.data.length > 0){
      localStorage.setItem('userInfo', JSON.stringify(response.data[0]));
      yield put({
        type: 'LOGIN_SUCCESS',
        payload:{
          data: response.data[0],
        }
      });
      if (response.data[0].role === 'user'){
        yield history.push('/')
      } else{
        yield history.push('/admin/products');
      }
    } else{
      yield put({
        type: 'LOGIN_FAIL',
        payload: {
          error: 'Email or Password Incorrect'
        }
      })
    }
  } catch(e){
    yield put({
      type: 'LOGIN_FAIL',
      payload:{
        error: e.error
      }
    });
  }
}
export default function* mySaga() {
  yield takeEvery('GET_PRODUCT_LIST', getProductSaga);
  yield takeEvery('GET_PRODUCT_DETAIL', getProductDetailSaga);
  yield takeEvery('GET_CATEGORY_LIST_DETAIL', getCategoryListSaga);
  yield takeEvery('LOGIN_REQUEST', loginSaga);
}