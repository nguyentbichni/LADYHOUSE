export function getProductListsAction(params){
  return{
    type: 'GET_PRODUCT_LIST',
    payload: params,
  }
}

export function getProductDetailAction(params){
  return{
    type: 'GET_PRODUCT_DETAIL',
    payload: params,
  }
}

export function getCategoryListAction(params){
  return{
    type: 'GET_CATEGORY_LIST_DETAIL',
    payload: params,
  }
}

export function getReviewListAction(params){
  return{
    type: 'GET_REVIEW_LIST_DETAIL',
    payload: params,
  }
}

export function loginAction(params){
  return{
    type: 'LOGIN_REQUEST',
    payload: params,
  }
}

export function getUserInfoAction(params) {
  return {
    type: 'GET_USER_INFO_REQUEST',
    payload: params,
  }
}

export function reviewAction(params){
  return{
    type: 'REVIEW_REQUEST',
    payload: params,
  }
}
