const initialState = {
  products: [],
  productDetail: {},
  loading: false,
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCT_LIST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_PRODUCTS_SUCCESS': {
      return {
        ...state,
        products: [
          ...action.payload,
        ],
        loading: false,
      }
    }
    case 'GET_PRODUCTS_FAIL': {
      return state;
    }
    
    case 'GET_PRODUCTS_DETAIL_SUCCESS': {
      return {
        ...state,
        productDetail: action.payload,
      }
    }
    case 'GET_PRODUCTS_DETAIL_FAIL': {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default myReducer;