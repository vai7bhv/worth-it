import axios from 'axios'

import {
  REQUEST_DETAILS_FAIL,
  REQUEST_DETAILS_SUCCESS,
  REQUEST_DETAILS_REQUEST,
  NEW_REQUEST_REQUEST,
  NEW_REQUEST_SUCCESS,
  NEW_REQUEST_FAIL,
  CLEAR_ERROR,
} from '../reducers/constant/allConstant'

export const createRequest = (name, description) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REQUEST_REQUEST })

    const config = {
      headers: { 'Content-Type': 'application/json' },
    }
    console.log(name)

    const { data } = await axios.post(
      `/api/request/new`,
      { name, description },
      config
    )

    dispatch({
      type: NEW_REQUEST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEW_REQUEST_FAIL,
      payload: error.response.data.message,
    })
  }
}
