import {
  SELECT_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../types";

export const viewDetails = (id) => (dispatch) => {
  dispatch({
    type: SELECT_PRODUCT,
    payload: id,
  });
};

export const editProduct = (id, data) => (dispatch) => {
  dispatch({
    type: EDIT_PRODUCT,
    payload: { id, data },
  });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};

export const addProduct = (data) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: data,
  });
};
