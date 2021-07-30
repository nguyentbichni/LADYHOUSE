const initialState = {
  userList:{
    data: [],
    loading: false,
    error: ''
  }
}
export default function adminCommonReducer(state = initialState, action) {
  switch (action.type) {
    //User List
    case 'ADMIN/GET_USER_LIST_REQUEST':{
      return{
        ...state,
        userList:{
          ...state.userList,
          load: true,
        }
      }
    }
    case 'ADMIN/GET_USER_LIST_SUCCESS':{
      const { data } = action.payload;
      return{
        ...state,
        userList: {
          ...state.userList,
          data: data,
          load: false,
        }
      }
    }
    case 'ADMIN/GET_USER_LIST_FAIL':{
      const { error } = action.payload;
      return{
        ...state,
        userList:{
          ...state.userList,
          load: false,
          error: error,
        }
      }
    }
    case 'ADMIN/DELETE_USER_REQUEST':{
      return{
        userList:{
          ...state.userList,
          load: true,
        }
      }
    }
    case 'ADMIN/DELETE_USER_SUCCESS':{
      return{
        ...state,
        userList:{
          ...state.userList,
          load: false,
        }
      }
    }
    case 'ADMIN/DELETE_USER_FAIL':{
      const { error } = action.payload;
      return{
        ...state,
        userList:{
          ...state.userList,
          load: false,
          error: error
        }
      }
    }
    default: {
      return state;
    }
  }
}