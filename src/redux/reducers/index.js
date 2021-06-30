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
    loading: false,
    error: '',
  },
  categoryList: {
    data: [],
    loading: false,
    error: '',
  },
  // loading: false,
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
            loading: false,
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
          loading: false,
        },
      }
    }
    case 'GET_PRODUCTS_DETAIL_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          loading: false,
          error: error,
        },
      }
    }
    case 'GET_CATEGORY_LIST': {
      return{
        ...state,
        categoryList:{
          ...state.categoryList,
          loading: true
        },
      }
    }
    case 'GET_CATEGORY_LIST_SUCCESS': {
      const { data } = action.payload;
      return{
        ...state,
        categoryList:{
          ...state.categoryList,
          data: data,
          loading: false
        },
      }
    }
    case 'GET_CATEGORY_LIST_FAIL': {
      const { error } = action.payload;
      return{
        ...state,
        categoryList:{
          ...state.categoryList,
          error: error,
          loading: false
        },
      }
    }
    default: {
      return state;
    }
  }
}

export default myReducer;