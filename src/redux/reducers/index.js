const initialState = {
  products: [],
  productDetail:[],
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS': {
      return {
        ...state,
        products: [
          ...action.payload,
        ],
      }
    }
    case 'GET_PRODUCTS_FAIL': {
      return state;
    }
    case 'GET_PRODUCTS_DETAIL_SUCCESS': {
      return {
        ...state,
        productDetail: [
          action.payload
        ]
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