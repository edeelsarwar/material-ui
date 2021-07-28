import {combineReducers} from "redux";
import StudioReducer from "../reducers/StudioReducer";

const RootReducer = combineReducers({
    StudioReducer: StudioReducer,

});

export default RootReducer;