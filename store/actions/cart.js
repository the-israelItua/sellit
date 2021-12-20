import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  REDUCE_QTY,
} from "../types";

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};

export const increaseQty = (id) => (dispatch) => {
  dispatch({
    type: INCREASE_QTY,
    payload: id,
  });
};

export const reduceQty = (id) => (dispatch) => {
  dispatch({
    type: REDUCE_QTY,
    payload: id,
  });
};
