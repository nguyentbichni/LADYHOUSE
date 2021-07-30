export function getUserListAction(params) {
  return {
    type: 'ADMIN/GET_USER_LIST_REQUEST',
    payload: params,
  }
}

export function deleteUserAction(params) {
  return {
    type: 'ADMIN/DELETE_USER_REQUEST',
    payload: params,
  }
}