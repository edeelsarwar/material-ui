import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import RootReducer from "./redux/reducers/RootReducer";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store