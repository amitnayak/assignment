import ItemReducer from "./ItemReducer";
import CategoryReducer from "./CategoryReducer";
import CheckoutReducer from "./CheckoutReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    ItemReducer: ItemReducer,
    CategoryReducer: CategoryReducer,
    CheckoutReducer: CheckoutReducer
})
export default RootReducer;