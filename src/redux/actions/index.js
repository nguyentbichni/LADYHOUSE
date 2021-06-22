export function getProductLists(params){
  return{
    type: 'GET_PRODUCT_LIST',
    payload: params,
  }
}

export function getProductDetail(params){
  return{
    type: 'GET_PRODUCT_DETAIL',
    payload: params,
  }
}
