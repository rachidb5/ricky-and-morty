import { combineReducers } from "redux";

// Import all reducers
import charactersReducer from "./charactersReducer";

const reducers = combineReducers({
    characters: charactersReducer
})

export default reducers;