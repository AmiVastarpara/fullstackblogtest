import { combineReducers } from 'redux';

import AuthReducer from "./auth";
import PostReducer from "./post";
import AuthorReducer from "./author";

const reducer = combineReducers({
    AuthReducer,
    PostReducer,
    AuthorReducer
});

export default reducer;