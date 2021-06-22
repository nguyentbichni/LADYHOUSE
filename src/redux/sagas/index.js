import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getProductSaga(action) {
  try {
    const response = yield axios.get('http://localhost:3001/products?_expand=catalog&_embed=productOptions');
    console.log("🚀 ~ file: index.js ~ line 7 ~ function*getProductSaga ~ response", response)
    yield put({
      type: 'GET_PRODUCTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: 'GET_PRODUCTS_FAIL',
      payload: error,
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload
    const response = yield axios.get(`http://localhost:3001/products/${id}`);
    yield put({
      type: 'GET_PRODUCTS_DETAIL_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: 'GET_PRODUCTS_DETAIL_FAIL',
      payload: error,
    });
  }
}

export default function* mySaga() {
  yield takeEvery('GET_PRODUCT_LIST', getProductSaga);
  yield takeEvery('GET_PRODUCT_DETAIL', getProductDetailSaga);
}