import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default reducer;
