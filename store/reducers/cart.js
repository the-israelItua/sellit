import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  REDUCE_QTY,
} from "../types";

const initialState = {
  cartItems: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        total: state.total + action.payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        total: state.total - action.payload.price,
      };
    case INCREASE_QTY:
      let sel = state.cartItems.find((item) => item.id === action.payload);
      let newArray = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      sel.qty = sel.qty + 1;
      return {
        ...state,
        cartItem: [...newArray, sel],
        total: state.total + sel.price * sel.qty,
      };
    case REDUCE_QTY:
      let rsel = state.cartItems.find((item) => item.id === action.payload);
      let newrArray = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      rsel.qty = rsel.qty - 1;
      return {
        ...state,
        cartItem: [...newrArray, rsel],
        total: state.total - rsel.price * rsel.qty,
      };
    default:
      return state;
  }
};
