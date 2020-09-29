import filter from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filter,
  pizzas,
  cart,
});

export default rootReducer;
