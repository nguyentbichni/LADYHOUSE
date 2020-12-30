import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getProductSaga(action) {
  try {
    const response = yield axios.get('http://localhost:3001/products?_embed=productOptions');
    const data = response.data;
    yield put({
      type: 'GET_PRODUCTS_SUCCESS',
      payload: data,
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
    const responseProduct = yield axios.get(`http://localhost:3001/products/${id}`);
    const dataProductDetail = responseProduct.data;
    console.log("🚀 ~ file: index.js ~ line 25 ~ function*getProductDetailSaga ~ dataProductDetail", dataProductDetail)
    yield put({
      type: 'GET_PRODUCTS_DETAIL_SUCCESS',
      payload: dataProductDetail
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