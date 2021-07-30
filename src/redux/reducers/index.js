import { combineReducers } from 'redux';

import adminCommonReducer from './admin/common.reducer';

import userProductReducer from './user/product.reducer';
import userInfoReducer from './user/info.reducer';


export default combineReducers({
  adminCommonReducer,
  userProductReducer,
  userInfoReducer
});


// const initialState = {
//   productList: {
//     data: [],
//     page: 1,
//     loading: false,
//     error: ''
//   },
//   productDetail: {
//     data: {
//       category: {},
//       productOptions: [],
//       reviews: [],
//     },
//     loading: false,
//     error: '',
//   },
//   categoryList: {
//     data: [],
//     loading: false,
//     error: '',
//   },
//   reviewList: {
//     data: [],
//     loading: false,
//     error: '',
//   },
//   //login
//   userInfo:{
//     data: {},
//     loading: false,
//     error: ''
//   },
//   actionResponse: {
//     reviewProduct: {
//       loading: false,
//       error: '',
//     }
//   },
//   // loading: false,
//   //admin
//   userList:{
//     data: [],
//     loading: false,
//     error: ''
//   }
// };

// function myReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_PRODUCT_LIST': {
//       return {
//         ...state,
//         productList: {
//           ...state.productList,
//           loading: true,
//         },
//       }
//     }
//     case 'GET_PRODUCTS_SUCCESS': {
//       const { data, page, more } = action.payload;
//       if (more){    
//         return {
//           ...state,
//           productList: {
//             ...state.productList,
//             data: [
//               ...state.productList.data,
//               ...data,
//             ],
//             page: page,
//             loading: false,
//           }
//         }
//       }
//       else{
//         return{
//           ...state,
//           productList:{
//             ...state.productList,
//             data: data,
//             page: page,
//             loading: false
//           }
//         }
//       }
//     }
//     case 'GET_PRODUCTS_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         productList: {
//           ...state.productList,
//           loading: false,
//           error: error,
//         },
//       }
//     }
    
//     case 'GET_PRODUCTS_DETAIL_SUCCESS': {
//       const { data } = action.payload;
//       return {
//         ...state,
//         productDetail: {
//           ...state.productDetail,
//           data: data,
//           loading: false,
//         },
//       }
//     }
//     case 'GET_PRODUCTS_DETAIL_FAIL': {
//       const { error } = action.payload;
//       return {
//         ...state,
//         productDetail: {
//           ...state.productDetail,
//           loading: false,
//           error: error,
//         },
//       }
//     }
//     case 'GET_CATEGORY_LIST': {
//       return{
//         ...state,
//         categoryList:{
//           ...state.categoryList,
//           loading: true
//         },
//       }
//     }
//     case 'GET_CATEGORY_LIST_SUCCESS': {
//       const { data } = action.payload;
//       return{
//         ...state,
//         categoryList:{
//           ...state.categoryList,
//           data: data,
//           loading: false
//         },
//       }
//     }
//     case 'GET_CATEGORY_LIST_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         categoryList:{
//           ...state.categoryList,
//           error: error,
//           loading: false
//         },
//       }
//     }

//     //login
//     case 'LOGIN_REQUEST':{
//       return{
//         ...state,
//         userInfo:{
//           ...state.userInfo,
//           loading: true
//         }
//       }
//     }
//     case 'LOGIN_SUCCESS':{
//       const { data } = action.payload;
//       return{
//         ...state,
//         userInfo:{
//           ...state.userInfo,
//           data: data,
//           loading: false,
//         }
//       }
//     }
//     case 'LOGIN_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         userInfo: {
//           ...state.userInfo,
//           loading: false,
//           error: error,
//         }
//       }
//     }

//     //register
//     case 'REGISTER_REQUEST':{
//       return{
//         ...state,
//         userInfo:{
//           ...state.userInfo,
//           loading: true
//         }
//       }
//     }
//     case 'REGISTER_SUCCESS':{
//       const { data } = action.payload;
//       return{
//         ...state,
//         userInfo:{
//           ...state.userInfo,
//           data: data,
//           loading: false,
//         }
//       }
//     }
//     case 'REGISTER_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         userInfo: {
//           ...state.userInfo,
//           loading: false,
//           error: error,
//         }
//       }
//     }
//     //userInfo
//     case 'GET_USER_INFO_REQUEST':{
//       return{
//         ...state,
//         userInfo:{
//           ...state.userInfo,
//           loading: true
//         }
//       }
//     }
//     case 'GET_USER_INFO_REQUEST_SUCCESS' :{
//       const { data } = action.payload;
//       return{
//         ...state,
//         userInfo:{
//           ...state.userInfo,
//           data: data,
//           loading: false,
//         }
//       }
//     }
//     case 'GET_USER_INFO_REQUEST_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         userInfo: {
//           ...state.userInfo,
//           loading: false,
//           error: error,
//         }
//       }
//     }

//     //Post Review
//     case 'GET_REVIEW_LIST_REQUEST':{
//       return{
//         ...state,
//         reviewList: {
//           ...state.reviewList,
//           loading: true
//         }
//       }
//     }
//     case 'GET_REVIEW_LIST_SUCCESS' :{
//       const { data } = action.payload;
//       return{
//         ...state,
//         reviewList: {
//           ...state.reviewList,
//           data: data,
//           loading: false,
//         }
//       }
//     }
//     case 'GET_REVIEW_LIST_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         reviewList: {
//           ...state.reviewList,
//           loading: false,
//           error: error,
//         }
//       }
//     }

//     case 'REVIEW_PRODUCT_REQUEST':{
//       return{
//         ...state,
//         actionResponse: {
//           ...state.actionResponse,
//           reviewProduct: {
//             ...state.actionResponse.reviewProduct,
//             loading: true,
//           }
//         }
//       }
//     }
//     case 'REVIEW_PRODUCT_SUCCESS': {
//       const { data } = action.payload;
//       return{
//         ...state,
//         reviewList: {
//           ...state.reviewList,
//           data: [
//             data,
//             ...state.reviewList.data,
//           ],
//         },
//         actionResponse: {
//           ...state.actionResponse,
//           reviewProduct: {
//             ...state.actionResponse.reviewProduct,
//             loading: false,
//           }
//         }
//       }
//     }
//     case 'REVIEW_PRODUCT_FAIL': {
//       const { error } = action.payload;
//       return{
//         ...state,
//         actionResponse: {
//           ...state.actionResponse,
//           reviewProduct: {
//             ...state.actionResponse.reviewProduct,
//             loading: false,
//             error: error
//           }
//         }
//       }
//     }

//     //User List
//     case 'ADMIN/GET_USER_LIST_REQUEST':{
//       return{
//         ...state,
//         userList:{
//           ...state.userList,
//           load: true,
//         }
//       }
//     }
//     case 'ADMIN/GET_USER_LIST_SUCCESS':{
//       const { data } = action.payload;
//       return{
//         ...state,
//         userList: {
//           ...state.userList,
//           data: data,
//           load: false,
//         }
//       }
//     }
//     case 'ADMIN/GET_USER_LIST_FAIL':{
//       const { error } = action.payload;
//       return{
//         ...state,
//         userList:{
//           ...state.userList,
//           load: false,
//           error: error,
//         }
//       }
//     }
//     case 'ADMIN/DELETE_USER_REQUEST':{
//       return{
//         userList:{
//           ...state.userList,
//           load: true,
//         }
//       }
//     }
//     case 'ADMIN/DELETE_USER_SUCCESS':{
//       return{
//         ...state,
//         userList:{
//           ...state.userList,
//           load: false,
//         }
//       }
//     }
//     case 'ADMIN/DELETE_USER_FAIL':{
//       const { error } = action.payload;
//       return{
//         ...state,
//         userList:{
//           ...state.userList,
//           load: false,
//           error: error
//         }
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// }

// export default myReducer;