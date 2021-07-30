const initialState = {
  //login
  userInfo:{
    data: {},
    loading: false,
    error: ''
  }
};

export default function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    //login
    case 'LOGIN_REQUEST':{
      return{
        ...state,
        userInfo:{
          ...state.userInfo,
          loading: true
        }
      }
    }
    case 'LOGIN_SUCCESS':{
      const { data } = action.payload;
      return{
        ...state,
        userInfo:{
          ...state.userInfo,
          data: data,
          loading: false,
        }
      }
    }
    case 'LOGIN_FAIL': {
      const { error } = action.payload;
      return{
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: false,
          error: error,
        }
      }
    }

    //register
    case 'REGISTER_REQUEST':{
      return{
        ...state,
        userInfo:{
          ...state.userInfo,
          loading: true
        }
      }
    }
    case 'REGISTER_SUCCESS':{
      const { data } = action.payload;
      return{
        ...state,
        userInfo:{
          ...state.userInfo,
          data: data,
          loading: false,
        }
      }
    }
    case 'REGISTER_FAIL': {
      const { error } = action.payload;
      return{
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: false,
          error: error,
        }
      }
    }
    //userInfo
    case 'GET_USER_INFO_REQUEST':{
      return{
        ...state,
        userInfo:{
          ...state.userInfo,
          loading: true
        }
      }
    }
    case 'GET_USER_INFO_REQUEST_SUCCESS' :{
      const { data } = action.payload;
      return{
        ...state,
        userInfo:{
          ...state.userInfo,
          data: data,
          loading: false,
        }
      }
    }
    case 'GET_USER_INFO_REQUEST_FAIL': {
      const { error } = action.payload;
      return{
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: false,
          error: error,
        }
      }
    }
    default: {
      return state;
    }
  }
}