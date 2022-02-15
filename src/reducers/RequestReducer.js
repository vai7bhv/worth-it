import {
  CLEAR_ERROR,
  REQUEST_DETAILS_REQUEST,
  REQUEST_DETAILS_FAIL,
  REQUEST_DETAILS_SUCCESS,
  NEW_REQUEST_REQUEST,
  NEW_REQUEST_SUCCESS,
  NEW_REQUEST_FAIL,
  MY_REQUEST_REQUEST,
  MY_REQUEST_SUCCESS,
  MY_REQUEST_FAIL,
} from './constant/allConstant'

export const requestReducer = (state = { request: [] }, action) => {
  switch (action.type) {
    case REQUEST_DETAILS_REQUEST:
      return {
        loading: true,
        isAuthUser: false,
      }
    case REQUEST_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthUser: true,
        request: action.payload,
      }
    case REQUEST_DETAILS_FAIL:
      return {
        ...state,
        loading: true,
        isAuthUser: false,
        request: null,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export const newRequestReducer = (state = { request: [] }, action) => {
  switch (action.type) {
    case NEW_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NEW_REQUEST_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        request: action.payload.product,
      }
    case NEW_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const myRequestReducer = (state = { request: [] }, action) => {
  switch (action.type) {
    case NEW_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NEW_REQUEST_SUCCESS:
      return {
        loading: false,
        myRequests: action.payload,
      }

    case NEW_REQUEST_FAIL:
      return {
        loading: true,
        error: action.payload,
      }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}
