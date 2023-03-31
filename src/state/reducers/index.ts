import { combineReducers } from "redux";

// Import all reducers
import filtersReducer from "./filtersReducer";

const reducers = combineReducers({
    filters: filtersReducer
})

export default reducers;