const initialState = {
  productList: {
    data: [],
    page: 1,
    loading: false,
    error: ''
  },
  productDetail: {
    data: {
      category: {},
      productOptions: [],
    },
    load: false,
    error: '',
  },
  loading: false,
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCT_LIST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          loading: true,
        },
      }
    }
    case 'GET_PRODUCTS_SUCCESS': {
      const { data, page, more } = action.payload;
      if (more){    
        return {
          ...state,
          productList: {
            ...state.productList,
            data: [
              ...state.productList.data,
              ...data,
            ],
            page: page,
            load: false,
          }
        }
      }
      else{
        return{
          ...state,
          productList:{
            ...state.productList,
            data: data,
            page: page,
            loading: false
          }
        }
      }
    }
    case 'GET_PRODUCTS_FAIL': {
      const { error } = action.payload;
      return{
        ...state,
        productList: {
          ...state.productList,
          loading: false,
          error: error,
        },
      }
    }
    
    case 'GET_PRODUCTS_DETAIL_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_PRODUCTS_DETAIL_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          load: false,
          error: error,
        },
      }
    }
    default: {
      return state;
    }
  }
}

export default myReducer;