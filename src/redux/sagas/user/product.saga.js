import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

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
      url: `http://localhost:3001/products/${id}?_embed=productOptions&_embed=reviews`,
      params: {
        _expand: 'category',
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

function* getReviewListSaga(action){
  try {
    const { id } = action.payload;
    const response = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/reviews',
      params: {
        productId: id,
        _sort: 'id',
        _order: 'desc'
      }
    });
    yield put({
      type: 'GET_REVIEW_LIST_SUCCESS',
      payload: {
        data: response.data,
      }
    });
  } catch(error){
    yield put({
      type: 'GET_REVIEW_LIST_FAIL',
      payload: {
        error: error.error
      },
    });
  }
}

function* reviewProductSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axios({
      method: 'POST',
      url: `http://localhost:3001/reviews`,
      data: data
    })
    yield put({
      type: 'REVIEW_PRODUCT_SUCCESS',
      payload: {
        data: response.data
      },
    });
  } catch (error) {
    yield put({
      type: 'REVIEW_PRODUCT_FAIL',
      payload: {
        error: error.error,
      },
    });
  }
}

export default function* userProductSaga() {
  yield takeEvery('GET_PRODUCT_LIST', getProductSaga);
  yield takeEvery('GET_PRODUCT_DETAIL', getProductDetailSaga);
  yield takeEvery('GET_CATEGORY_LIST_DETAIL', getCategoryListSaga);
  yield takeEvery('REVIEW_PRODUCT_REQUEST', reviewProductSaga);
  yield takeEvery('GET_REVIEW_LIST_REQUEST', getReviewListSaga);
}