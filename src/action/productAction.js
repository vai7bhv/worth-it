import {
  ALL_PRODUCT_FAILED,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from '../reducers/constant/productConstant'
import axios from 'axios'

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST })

    const { data } = await axios.get('/api/products')

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_FAILED,
      payload: err.response.data.message,
    })
  }
}

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const pid = '61f271c0b8c2525c7aa6445a'
    console.log('vyuu,sw,hj')
    // console.log(id)
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload: err.response.data.message,
    })
  }
}
