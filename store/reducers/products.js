import PRODUCTS from "../../data";
import {
  SELECT_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../types";

const initialState = {
  products: PRODUCTS,
  selProduct: [],
  adminProducts: PRODUCTS.filter((item) => item.catId === "u1"),
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      let prod = PRODUCTS.find((item) => item.id === action.payload);
      return { ...state, selProduct: prod };
    case EDIT_PRODUCT:
      let edArr = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      let adArr = state.adminProducts.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        products: [action.payload.data, ...edArr],
        adminProducts: [action.payload.data, ...adArr],
      };
    case DELETE_PRODUCT:
      let delArr = state.products.filter((item) => item.id !== action.payload);
      let adDelArr = state.adminProducts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        products: [...delArr],
        adminProducts: [...adDelArr],
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
        adminProducts: [action.payload, ...state.adminProducts],
      };
    default:
      return state;
  }
};
