import { fork } from 'redux-saga/effects';

import adminCommonSaga from './admin/common.saga'

import userInfoSaga from './user/info.saga';
import userProductSaga from './user/product.saga';

export default function* mySaga() {
  yield fork(adminCommonSaga);
  yield fork(userInfoSaga);
  yield fork(userProductSaga);
}

// import { put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
// import history from '../../util/history';

// function* getProductSaga(action) {
//   try {
//     const { page, limit, categoryId, searchKey ,more } = action.payload;
//     // const response = yield axios.get('http://localhost:3001/products?_expand=category&_embed=productOptions');
//     // const categoryData = categoryId ? { categoryId: categoryId } : {};
//     const response = yield axios({
//       method: 'GET',
//       url: 'http://localhost:3001/products',
//       params: {
//         _expand: 'category',
//         _embed: 'productOptions',
//         _page: page,
//         _limit: limit,
//         // ...categoryData
//         ...categoryId && { categoryId },
//         ...searchKey && { q: searchKey },
//       }
//     });
//     yield put({
//       type: 'GET_PRODUCTS_SUCCESS',
//       payload: {
//         data: response.data,
//         page,
//         more
//       }
//     });
//   } catch (error) {
//     yield put({
//       type: 'GET_PRODUCTS_FAIL',
//       payload: {
//         error: error.error
//       }
//     });
//   }
// }

// function* getCategoryListSaga(action){
//   try{
//     const response = yield axios.get(`http://localhost:3001/categories`);
//     yield put({
//       type: 'GET_CATEGORY_LIST_SUCCESS',
//       payload: {
//         data: response.data,
//       }
//     });
//   } catch(error){
//     yield put({
//       type: 'GET_CATEGORY_LIST_FAIL',
//       payload: {
//         error: error.error
//       },
//     });
//   }
// }

// function* getProductDetailSaga(action) {
//   try {
//     const { id } = action.payload
//     // const response = yield axios.get(`http://localhost:3001/products/${id}`);
//     const response = yield axios({
//       method: 'GET',
//       url: `http://localhost:3001/products/${id}?_embed=productOptions&_embed=reviews`,
//       params: {
//         _expand: 'category',
//       }
//     })
//     yield put({
//       type: 'GET_PRODUCTS_DETAIL_SUCCESS',
//       payload: {
//         data: response.data
//       },
//     });
//   } catch (error) {
//     yield put({
//       type: 'GET_PRODUCTS_DETAIL_FAIL',
//       payload: {
//         error: error.error,
//       },
//     });
//   }
// }

// function* loginSaga(action){
//   try {
//     const { email, password } = action.payload;
//     // http://localhost:3001/users?email=nguyentbichni&password=ni2401
//     const result = yield axios({
//       method: 'GET',
//       url: 'http://localhost:3001/users',
//       params: {
//         email,
//         password,
//       }
//     });
//     if (result.data.length > 0) {
//       localStorage.setItem('userInfo', JSON.stringify(result.data[0]));
//       yield put({
//         type: "LOGIN_SUCCESS",
//         payload: {
//           data: result.data[0],
//         },
//       });
//       if (result.data[0].role === 'user') {
//         yield history.push('/');
//       } else {
//         yield history.push('/admin/user-management');
//       }
//     } else {
//       yield put({
//         type: "LOGIN_FAIL",
//         payload: {
//           error: 'Email hoặc mật khẩu không đúng',
//         },
//       });
//     }
//   } catch (e) {
//     yield put({
//       type: "LOGIN_FAIL",
//       payload: {
//         error: e.error
//       },
//     });
//   }
// }

// function* registerSaga(action){
//   try{
//     const { email, password, phone, name} = action.payload;
//     const emailArray = yield axios({
//       method: 'GET',
//       url: `http://localhost:3001/users?email=${email}`,
//     })
//     if(emailArray.data.length > 0){
//       console.log("Đã tồn tại");
//     }else{
//       const response = yield axios({
//         method: 'POST',
//         url: 'http://localhost:3001/users',
//         data: {
//           email,
//           password,
//           name,
//           phone,
//           role: 'user',
//           cart: [],
//         }
//       });
//       yield put({
//         type: 'REGISTER_SUCCESS',
//         payload: {
//           data: response.data,
//         }
//       });
//     }
//   }catch(e){
//     yield put({
//       type: 'REGISTER__FAIL',
//       payload: {
//         error: e.error,
//       },
//     });
//   }
// }

// function* getUserInfoSaga(action) {
//   try {
//     const { id } = action.payload;
//     const response = yield axios.get(`http://localhost:3001/users/${id}`);
//     yield put({
//       type: 'GET_USER_INFO_REQUEST_SUCCESS',
//       payload: {
//         data: response.data,
//       },
//     });
//   } catch (e) {
//     yield put({
//       type: 'GET_USER_INFO_REQUEST_FAIL',
//       payload: {
//         error: e.error
//       },
//     });
//   }
// }

// function* getReviewListSaga(action){
//   try {
//     const { id } = action.payload;
//     const response = yield axios({
//       method: 'GET',
//       url: 'http://localhost:3001/reviews',
//       params: {
//         productId: id,
//         _sort: 'id',
//         _order: 'desc'
//       }
//     });
//     yield put({
//       type: 'GET_REVIEW_LIST_SUCCESS',
//       payload: {
//         data: response.data,
//       }
//     });
//   } catch(error){
//     yield put({
//       type: 'GET_REVIEW_LIST_FAIL',
//       payload: {
//         error: error.error
//       },
//     });
//   }
// }

// function* reviewProductSaga(action) {
//   try {
//     const { data } = action.payload;
//     const response = yield axios({
//       method: 'POST',
//       url: `http://localhost:3001/reviews`,
//       data: data
//     })
//     yield put({
//       type: 'REVIEW_PRODUCT_SUCCESS',
//       payload: {
//         data: response.data
//       },
//     });
//   } catch (error) {
//     yield put({
//       type: 'REVIEW_PRODUCT_FAIL',
//       payload: {
//         error: error.error,
//       },
//     });
//   }
// }

// function* getUserListSaga(action){
//   try{
//     const response = yield axios({
//       method: 'GET',
//       url: 'http://localhost:3001/users'
//     });
//     yield put({
//       type: 'ADMIN/GET_USER_LIST_SUCCESS',
//       payload: {
//         data: response.data
//       }
//     })
//   }catch(e){
//     yield put({
//       type: 'ADMIN/GET_USER_LIST_FAIL',
//       payload:{
//         error: e.error
//       },
//     });
//   }
// }

// function* deleteUserSaga(action){
//   try{
//     const { id } = action.payload;
//     const response = yield axios({
//       method: 'GET',
//       url: `http://localhost:3001/users/${id}`
//     })
//     if(response.data.role === 'user'){
//       yield axios({
//         method: 'DELETE',
//         url: `http://localhost:3001/users/${id}`
//       });
//       yield put({
//         type: 'ADMIN/DELETE_USER_SUCCESS',
//         payload: { data: {id } },
//       })
//       yield put({
//         type: 'ADMIN/GET_USER_LIST_REQUEST'
//       })
//     }else{
//       console.log('Bạn không được phép xoá')
//       yield put({
//         type: 'ADMIN/DELETE_USER_FAIL',
//       })
//     }
//   }catch(e){
//     console.log("🚀 ~ file: index.js ~ line 287 ~ function*deleteUserSaga ~ e", e)
//     yield put({
//       type: 'ADMIN/DELETE_USER_FAIL',
//       payload: {
//         error: e.error
//       }
//     })
//   }
// }

// export default function* mySaga() {
//   yield takeEvery('GET_PRODUCT_LIST', getProductSaga);
//   yield takeEvery('GET_PRODUCT_DETAIL', getProductDetailSaga);
//   yield takeEvery('GET_CATEGORY_LIST_DETAIL', getCategoryListSaga);
//   yield takeEvery('LOGIN_REQUEST', loginSaga);
//   yield takeEvery('REGISTER_REQUEST', registerSaga);
//   yield takeEvery('GET_USER_INFO_REQUEST', getUserInfoSaga);
//   yield takeEvery('REVIEW_PRODUCT_REQUEST', reviewProductSaga);
//   yield takeEvery('GET_REVIEW_LIST_REQUEST', getReviewListSaga);
//   yield takeEvery('ADMIN/GET_USER_LIST_REQUEST', getUserListSaga);
//   yield takeEvery('ADMIN/DELETE_USER_REQUEST', deleteUserSaga);
// }